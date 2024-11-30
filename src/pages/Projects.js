import React from 'react';
import BackgroundScene from '../components/BackgroundScene';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Scoleton",
            description: "Site web de gestion développé avec des technologies web traditionnelles, permettant une gestion efficace des données avec une base de données robuste.",
            technologies: ["HTML/CSS", "PHP", "SQL", "PostgreSQL"],
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "Trains",
            description: "Adaptation PC du jeu de société japonais Trains, développée en Java avec une interface graphique JavaFX pour une expérience utilisateur fluide et intuitive.",
            technologies: ["Java", "JavaFX"],
            image: "/api/placeholder/400/300"
        },
        {
            id: 3,
            title: "E3Cete",
            description: "Projet mathématique d'analyse comparative des algorithmes de tri, évaluant leurs performances pour le tri de grands jeux de cartes à travers différentes métriques.",
            technologies: ["Algorithmes", "Mathématiques", "Analyse de performances"],
            image: "/api/placeholder/400/300"
        }
    ];

    return (
        <>
            <BackgroundScene />
            <div className="relative min-h-screen z-10 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-12 text-white text-center">Mes Projets</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map(project => (
                            <div key={project.id} className="bg-slate-800/80 rounded-xl overflow-hidden backdrop-blur-sm">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 text-emerald-400">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;