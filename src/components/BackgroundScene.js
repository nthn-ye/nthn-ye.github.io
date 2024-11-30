import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BackgroundScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#0f172a');

        const camera = new THREE.PerspectiveCamera(
            90, // FOV augmenté pour voir plus large
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        // Caméra plus proche et plus haute
        camera.position.set(0, 10, 8);
        camera.rotation.x = -Math.PI / 3;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Plus de cubes
        const gridSize = 75;
        const spacing = 1.5; // Espacement réduit pour compenser le plus grand nombre de cubes
        const cubesArray = [];

        const geometry = new THREE.BoxGeometry(1.1, 1.1, 1.1); // Cubes légèrement plus petits

        // Nouvelles couleurs : gris en bas, vert en haut
        const baseColor = new THREE.Color('#64748b'); // Gris slate-500
        const lightColor = new THREE.Color('#34d399'); // Vert emerald-400

        for (let x = 0; x < gridSize; x++) {
            for (let z = 0; z < gridSize; z++) {
                const material = new THREE.MeshPhongMaterial({
                    color: baseColor,
                    shininess: 20,
                });

                const cube = new THREE.Mesh(geometry, material);

                cube.position.set(
                    (x - gridSize/2) * spacing,
                    -2,
                    (z - gridSize/2) * spacing - 15
                );

                cube.userData = {
                    gridX: x,
                    gridZ: z,
                    baseColor: baseColor,
                    lightColor: lightColor
                };

                cubesArray.push(cube);
                scene.add(cube);
            }
        }

        // Éclairage ajusté
        const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
        mainLight.position.set(5, 10, 5);
        scene.add(mainLight);

        const secondaryLight = new THREE.DirectionalLight(0x34d399, 0.3);
        secondaryLight.position.set(-5, 10, -5);
        scene.add(secondaryLight);

        scene.add(new THREE.AmbientLight(0x404040, 0.8));

        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime() * 0.5;

            cubesArray.forEach((cube) => {
                const { gridX, gridZ, baseColor, lightColor } = cube.userData;

                const distance = Math.sqrt(
                    Math.pow(gridX - gridSize/2, 2) +
                    Math.pow(gridZ - gridSize/2, 2)
                );

                // Amplitude légèrement réduite
                const height =
                    Math.sin(elapsedTime + gridX * 0.3) * 0.7 +
                    Math.sin(elapsedTime * 0.5 + gridZ * 0.3) * 0.7 +
                    Math.sin(elapsedTime * 0.2 + distance * 0.2) * 0.4;

                cube.position.y = -2 + height;

                // Transition plus subtile entre gris et vert
                const lerpFactor = ((height + 2) / 4) * 0.4; // Facteur réduit pour une transition plus subtile
                const newColor = new THREE.Color();
                newColor.lerpColors(baseColor, lightColor, lerpFactor);
                cube.material.color = newColor;
            });

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            geometry.dispose();
            cubesArray.forEach(cube => {
                scene.remove(cube);
                cube.geometry.dispose();
                cube.material.dispose();
            });
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.5,
            }}
        />
    );
};

export default BackgroundScene;