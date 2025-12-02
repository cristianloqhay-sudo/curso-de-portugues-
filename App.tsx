import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CardGrid from './components/CardGrid';
import Quiz from './components/Quiz';
import { DATA } from './constants';
import { ViewState } from './types';
import { Menu, Play } from 'lucide-react';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewState>('home');
    const [visitedModules, setVisitedModules] = useState<Set<string>>(new Set());
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavigate = (view: string) => {
        setCurrentView(view);
        if (view !== 'home' && view !== 'quiz' && DATA[view]) {
            setVisitedModules(prev => new Set(prev).add(view));
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderContent = () => {
        if (currentView === 'home') {
            return <Dashboard onNavigate={handleNavigate} />;
        }
        
        if (currentView === 'quiz') {
            return <Quiz />;
        }

        const categoryData = DATA[currentView];
        if (categoryData) {
            return <CardGrid data={categoryData} />;
        }

        return <div className="text-center p-10">Página no encontrada</div>;
    };

    return (
        <div className="flex h-screen bg-[#F9FAFB] text-gray-800 overflow-hidden font-sans">
            
            <Sidebar 
                currentView={currentView}
                visitedModules={visitedModules}
                onNavigate={handleNavigate}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Mobile Header */}
                <header className="md:hidden bg-[#009C3B] text-white p-4 flex justify-between items-center shadow-lg z-10">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsSidebarOpen(true)}>
                            <Menu className="w-7 h-7" />
                        </button>
                        <h1 className="text-xl font-bold">🇧🇷 Léxico Portugués</h1>
                    </div>
                    <button 
                        onClick={() => handleNavigate('saludos')}
                        className="bg-[#FFDF00] text-[#002776] px-3 py-1.5 rounded-lg font-bold shadow-md active:scale-95 text-sm flex items-center gap-1 border border-yellow-600 animate-heartbeat"
                    >
                        <Play className="w-3 h-3 fill-current" /> EMPEZAR
                    </button>
                </header>

                {/* Main Content Scroll Area */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 scroll-smooth">
                    {renderContent()}
                    
                    {/* Bottom padding for mobile aesthetics */}
                    <div className="h-10 md:hidden"></div>
                </main>
            </div>
        </div>
    );
};

export default App;