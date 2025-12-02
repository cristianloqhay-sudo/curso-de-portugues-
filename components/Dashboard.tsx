import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DATA } from '../constants';
import { Instagram, Facebook, Video, BookOpen, ArrowRight, Home } from 'lucide-react';

interface DashboardProps {
    onNavigate: (view: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
    
    const chartData = Object.keys(DATA).map(key => ({
        name: DATA[key].title.split(' ')[0],
        value: DATA[key].items.length
    }));

    const COLORS = ['#009C3B', '#00702A', '#005c23', '#FFDF00', '#E5C800', '#FFED4D', '#002776'];

    return (
        <section className="max-w-4xl mx-auto animate-fade-in pb-12">
            <div className="mb-10 text-center md:text-left">
                <h2 className="text-4xl font-bold text-[#009C3B] mb-3">Bem-vindo! Bienvenido.</h2>
                <p className="text-gray-600 text-lg">Esta aplicación interactiva está diseñada para ayudarte a dominar el vocabulario portugués esencial. <br/><span className="font-semibold text-[#002776]">¡Vamos a falar português!</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Info Card */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FFDF00] flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-2xl mb-6 text-[#009C3B] flex items-center gap-2">
                            <BookOpen className="w-6 h-6" /> Cómo usar esta app
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start"><span className="mr-3 text-[#002776] font-bold">➤</span> <span><strong>Paso 1:</strong> Navega por los temas en el menú lateral.</span></li>
                            <li className="flex items-start"><span className="mr-3 text-[#002776] font-bold">➤</span> <span><strong>Haz clic en las tarjetas</strong> para girarlas y ver ejemplos.</span></li>
                            <li className="flex items-start"><span className="mr-3 text-[#002776] font-bold">➤</span> <span>Practica los sonidos nasales (ão, õe) con la guía fonética.</span></li>
                            <li className="flex items-start font-bold text-[#002776] bg-blue-50 p-2 rounded"><span className="mr-3">➤</span> <span>¡Haz el Teste de Vocabulário para medir tu progreso!</span></li>
                        </ul>
                    </div>
                    <button 
                        onClick={() => onNavigate('saludos')}
                        className="mt-6 w-full bg-[#009C3B] hover:bg-[#00702A] text-white font-bold py-3 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
                    >
                        Empezar Lección <ArrowRight className="w-5 h-5"/>
                    </button>
                </div>

                {/* Visualization */}
                <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center border-t-4 border-[#009C3B]">
                    <h3 className="font-bold text-xl mb-4 text-[#009C3B]">Composición del Vocabulario</h3>
                    <div className="w-full h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend layout="vertical" verticalAlign="bottom" align="center" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Call to Action Banner */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#009C3B] via-[#FFDF00] to-[#002776]"></div>
                <h3 className="text-[#009C3B] font-bold text-2xl mb-3">¡Únete a la Comunidad y Sigue Aprendiendo!</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Síguenos en redes para más tips y contenido gratuito, o da el siguiente paso en tu aprendizaje.</p>
                
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                    <a href="https://www.instagram.com/lexigo2.0/" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                        <div className="w-14 h-14 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                            <Instagram className="w-8 h-8" />
                        </div>
                        <span className="text-xs mt-2 font-bold text-gray-700">Instagram</span>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61583705050960" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                        <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                            <Facebook className="w-8 h-8" />
                        </div>
                        <span className="text-xs mt-2 font-bold text-gray-700">Facebook</span>
                    </a>

                    <a href="https://www.tiktok.com/@lexigo2.0" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                        <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                            <Video className="w-8 h-8" />
                        </div>
                        <span className="text-xs mt-2 font-bold text-gray-700">TikTok</span>
                    </a>
                </div>

                {/* Digital Course Button */}
                <a 
                    href="https://go.hotmart.com/U103170151V" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#FFDF00] hover:bg-[#E5C800] text-[#002776] text-xl font-bold py-4 px-10 rounded-xl shadow-xl transition-transform hover:scale-105 border-2 border-yellow-500 animate-heartbeat"
                >
                    <BookOpen className="w-6 h-6" />
                    Iniciar Curso Digital
                </a>
            </div>
        </section>
    );
};

export default Dashboard;