import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundScene from '../components/BackgroundScene';

const Home = () => {
    return (
        <>
            <BackgroundScene />
            <div className="relative min-h-screen z-10 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4 text-white">DUPIN Nathan</h1>
                    <h2 className="text-3xl mb-12 text-emerald-400">Développeur Informatique</h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="../ressources/CV.pdf"
                            download
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-colors shadow-lg"
                        >
                            Télécharger mon CV
                        </a>
                        <a
                            href="www.linkedin.com/in/nathan-dupin-7b05bb264"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors shadow-lg"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/nthn-ye"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors shadow-lg"
                        >
                            GitHub
                        </a>
                        <Link
                            to="/projects"
                            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg transition-colors shadow-lg"
                        >
                            Mes Projets
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;