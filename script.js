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

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close-modal");

    // Détails des projets
    const projectDetails = {
        scoleton: {
            title: "Scoleton",
            description: "Scoleton est un clone de Scodoc permettant un suivi de scolarité universitaire. Ce projet m'a permis d'apprendre l'architecture MVC, la gestion de bases de données relationnelles avec PostgreSQL, et l'intégration de concepts de sécurité comme le chiffrement RSA."
        },
        "nuit-info": {
            title: "Nuit de l’Info 2023",
            description: "Projet développé lors de la Nuit de l’Info 2023. Nous avons créé un site web pour sensibiliser aux maladies sexuellement transmissibles. J'ai renforcé mes compétences en HTML/CSS et découvert Symfony dans un contexte de travail sous pression."
        },
        trains: {
            title: "Trains",
            description: "Trains est un jeu de plateau japonais développé en Java. Ce projet m'a aidé à comprendre les concepts de programmation orientée objet, à utiliser JavaFX pour l'interface graphique, et à collaborer avec GitLab."
        }
    };

    // Afficher le modal
    document.querySelectorAll(".show-modal").forEach(button => {
        button.addEventListener("click", (e) => {
            const projectKey = e.target.getAttribute("data-project");
            const project = projectDetails[projectKey];

            if (project) {
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                modal.classList.remove("hidden");
                modal.style.display = "flex"; // Afficher le modal
            }
        });
    });

    // Fermer le modal
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
