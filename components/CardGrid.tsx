import React from 'react';
import { CategoryData } from '../types';
import FlashCard from './FlashCard';

interface CardGridProps {
    data: CategoryData;
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => {
    return (
        <section className="max-w-5xl mx-auto animate-fade-in">
            <div className="mb-8 border-b border-gray-300 pb-4">
                <h2 className="text-3xl font-bold text-[#009C3B]">{data.title}</h2>
                <p className="text-gray-600 mt-2 text-lg">{data.desc}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.items.map((item, index) => (
                    <FlashCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default CardGrid;