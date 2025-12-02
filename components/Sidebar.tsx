import React from 'react';
import { DATA } from '../constants';
import { ViewState } from '../types';
import { Home, Smile, Handshake, Hash, Palette, Dog, Plane, CloudSun, BrainCircuit, Play } from 'lucide-react';

interface SidebarProps {
    currentView: ViewState;
    visitedModules: Set<string>;
    onNavigate: (view: string) => void;
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, visitedModules, onNavigate, isOpen, onClose }) => {
    
    // Map icons to categories
    const icons: Record<string, React.ReactNode> = {
        saludos: <Smile className="w-5 h-5" />,
        presentacion: <Handshake className="w-5 h-5" />,
        numeros: <Hash className="w-5 h-5" />,
        colores: <Palette className="w-5 h-5" />,
        animales: <Dog className="w-5 h-5" />,
        viajes: <Plane className="w-5 h-5" />,
        clima: <CloudSun className="w-5 h-5" />
    };

    const progress = Math.min(100, Math.round((visitedModules.size / Object.keys(DATA).length) * 100));

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar container */}
            <nav 
                className={`fixed md:relative z-30 w-64 h-full bg-[#009C3B] text-white flex flex-col shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/20">
                    <h1 className="text-2xl font-bold tracking-wide flex flex-col">
                        <span className="flex items-center gap-2">🇧🇷 Portugués</span>
                        <span className="text-sm font-normal text-green-100 opacity-90">para o Dia a Dia</span>
                    </h1>
                </div>

                {/* CTA Button */}
                <div className="px-6 pt-6 pb-2">
                    <button 
                        onClick={() => { onNavigate('saludos'); onClose(); }}
                        className="w-full bg-[#FFDF00] hover:bg-[#E5C800] text-[#002776] font-bold py-3 px-4 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-yellow-600 animate-heartbeat"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        <span>¡Empecemos!</span>
                    </button>
                </div>

                {/* Nav Items */}
                <div className="flex-1 overflow-y-auto py-4 space-y-1">
                    <button 
                        onClick={() => { onNavigate('home'); onClose(); }}
                        className={`w-full text-left px-6 py-3 flex items-center gap-3 transition-colors border-l-4 ${currentView === 'home' ? 'bg-[#00702A] border-[#FFDF00]' : 'border-transparent hover:bg-[#008532]'}`}
                    >
                        <Home className="w-5 h-5" />
                        <span className="font-semibold">Inicio / Dashboard</span>
                    </button>

                    {Object.values(DATA).map(category => (
                        <button 
                            key={category.id}
                            onClick={() => { onNavigate(category.id); onClose(); }}
                            className={`w-full text-left px-6 py-3 flex items-center gap-3 transition-colors border-l-4 ${currentView === category.id ? 'bg-[#00702A] border-[#FFDF00]' : 'border-transparent hover:bg-[#008532]'}`}
                        >
                            {icons[category.id] || <Home className="w-5 h-5"/>}
                            <span>{category.title.split(' ')[0]} {category.title.split(' ')[1] === 'e' ? '...' : ''}</span>
                        </button>
                    ))}

                    <button 
                        onClick={() => { onNavigate('quiz'); onClose(); }}
                        className={`w-full text-left px-6 py-3 flex items-center gap-3 transition-colors border-l-4 ${currentView === 'quiz' ? 'bg-[#00702A] border-[#FFDF00]' : 'border-transparent hover:bg-[#008532]'}`}
                    >
                        <BrainCircuit className="w-5 h-5" />
                        <span className="font-semibold">Test de Vocabulario</span>
                    </button>
                </div>

                {/* Footer Progress */}
                <div className="p-6 bg-[#005c23] mt-auto border-t border-white/10">
                    <p className="text-xs text-green-200 mb-2 font-medium uppercase tracking-wider">Progreso de sesión</p>
                    <div className="w-full bg-[#004219] rounded-full h-2.5 border border-white/10">
                        <div 
                            className="bg-[#FFDF00] h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(255,223,0,0.5)]" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-center mt-2 text-green-100 font-mono">{visitedModules.size}/{Object.keys(DATA).length} Temas explorados</p>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;