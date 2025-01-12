document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    hero.style.opacity = "0";
    hero.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        hero.style.opacity = "1";
    }, 500);

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const discoverButton = document.querySelector(".btn");
    const aboutSection = document.querySelector("#about");

    // Gestion de l'animation de défilement
    discoverButton.addEventListener("click", (e) => {
        e.preventDefault(); // Empêche l'action par défaut
        aboutSection.scrollIntoView({
            behavior: "smooth" // Défilement fluide
        });
    });
});
