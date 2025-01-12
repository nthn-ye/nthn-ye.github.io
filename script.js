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

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDate = document.getElementById("modal-date");
    const modalDuration = document.getElementById("modal-duration");
    const modalTeam = document.getElementById("modal-team");
    const modalDescription = document.getElementById("modal-description");
    const learningList = document.getElementById("learning-list");
    const closeModal = document.querySelector(".close-modal");

    const projectDetails = {
        scoleton: {
            title: "Scoleton",
            date: "Septembre 2024 - Janvier 2025",
            duration: "4 mois",
            team: "Équipe de 3 personnes",
            description: "Clone de Scodoc permettant un suivi de scolarité universitaire. Ce projet m'a permis d'apprendre l'architecture MVC, la gestion de bases de données relationnelles avec PostgreSQL, et l'intégration de concepts de sécurité comme le chiffrement RSA.",
            learnings: [
                "Comprendre l'architecture MVC",
                "Gérer des bases de données relationnelles",
                "Appliquer des concepts de sécurité (chiffrement RSA)"
            ]
        },
        "nuit-info": {
            title: "Nuit de l’Info 2023",
            date: "Décembre 2023",
            duration: "1 nuit",
            team: "Équipe de 6 personnes",
            description: "Site web pour sensibiliser aux maladies sexuellement transmissibles, développé dans un contexte de travail sous pression.",
            learnings: [
                "Renforcer mes compétences en HTML/CSS",
                "Découvrir Symfony",
                "Travailler sous pression en équipe"
            ]
        },
        trains: {
            title: "Trains",
            date: "Janvier 2024 - Mai 2024",
            duration: "5 mois",
            team: "Individuel",
            description: "Jeu de plateau japonais développé en Java, mettant l'accent sur la programmation orientée objet et l'interface graphique.",
            learnings: [
                "Maîtriser la programmation orientée objet en Java",
                "Créer une interface graphique avec JavaFX",
                "Utiliser GitLab pour la gestion de projet"
            ]
        }
    };

    document.querySelectorAll(".show-modal").forEach(button => {
        button.addEventListener("click", (e) => {
            const projectKey = e.target.getAttribute("data-project");
            const project = projectDetails[projectKey];

            if (project) {
                modalTitle.textContent = project.title;
                modalDate.textContent = project.date;
                modalDuration.textContent = project.duration;
                modalTeam.textContent = project.team;
                modalDescription.textContent = project.description;

                learningList.innerHTML = "";
                project.learnings.forEach(learning => {
                    const listItem = document.createElement("li");
                    listItem.textContent = learning;
                    learningList.appendChild(listItem);
                });

                modal.classList.remove("hidden");
                modal.style.display = "flex";
            }
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});