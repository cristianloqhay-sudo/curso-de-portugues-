import React, { useState } from 'react';
import { VocabularyItem } from '../types';

interface FlashCardProps {
    item: VocabularyItem;
}

const FlashCard: React.FC<FlashCardProps> = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    let cardStyle = {};
    let textColor = 'text-[#009C3B]';
    let subTextColor = 'text-gray-600';
    let borderColor = 'border-gray-200';

    if (item.color) {
        cardStyle = { backgroundColor: item.color };
        textColor = item.text === 'white' ? 'text-white' : 'text-gray-900';
        subTextColor = item.text === 'white' ? 'text-white/80' : 'text-gray-600';
        if (item.border) borderColor = 'border-gray-300';
    }

    return (
        <div 
            className="group h-64 w-full cursor-pointer perspective-[1000px]"
            onClick={handleClick}
        >
            <div className={`relative h-full w-full text-center transition-all duration-500 [transform-style:preserve-3d] shadow-lg rounded-xl border ${borderColor} ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front */}
                <div 
                    className={`absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden] rounded-xl ${item.color ? '' : 'bg-white'}`}
                    style={cardStyle}
                >
                    {item.icon && <div className="text-5xl mb-3">{item.icon}</div>}
                    <h3 className={`text-2xl font-bold ${textColor}`}>{item.pt}</h3>
                    <p className={`text-base font-semibold mt-2 ${subTextColor}`}>{item.es}</p>
                    <p className="font-mono text-xs mt-2 text-[#002776] uppercase tracking-wider bg-white/20 px-2 rounded">[ {item.pron} ]</p>
                    
                    <div className="absolute bottom-4">
                        <span className="bg-[#009C3B] text-white text-xs px-3 py-1 rounded-full shadow-md">
                            Ver Frase
                        </span>
                    </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#009C3B] text-white rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-green-100 mb-2">Frase de Exemplo</p>
                    <p className="text-lg italic mb-3 font-light text-center leading-tight">"{item.frasePt || item.context}"</p>
                    
                    <p className="font-mono text-xs mt-1 text-[#002776] bg-white px-2 py-0.5 rounded uppercase font-bold">[ {item.frasePron || '...'} ]</p>
                    
                    <p className="text-xs uppercase tracking-widest text-green-100 mt-4 mb-1">(Espanhol)</p>
                    <p className="text-sm font-semibold text-white text-center leading-tight">"{item.fraseEs || item.context}"</p>
                </div>
            </div>
        </div>
    );
};

export default FlashCard;