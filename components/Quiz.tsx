import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { QuizQuestion, VocabularyItem } from '../types';
import { RotateCcw, BookOpen } from 'lucide-react';

const Quiz: React.FC = () => {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        startQuiz();
    }, []);

    const shuffle = <T,>(array: T[]): T[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const startQuiz = () => {
        const allVocab: VocabularyItem[] = [];
        Object.values(DATA).forEach(cat => allVocab.push(...cat.items));

        const shuffledVocab = shuffle(allVocab).slice(0, 10);
        
        const generatedQuestions = shuffledVocab.map(item => {
            const isPhraseQuestion = Math.random() < 0.5 && item.frasePt && item.fraseEs;
            
            if (isPhraseQuestion) {
                const correct = item.fraseEs;
                // Get distractors
                const otherItems = allVocab.filter(v => v.fraseEs !== correct && v.fraseEs);
                const distractors = shuffle(otherItems).slice(0, 3).map(v => v.fraseEs);
                const options = shuffle([correct, ...distractors]);
                
                return {
                    question: `Si alguien dice: "${item.frasePt}", ¿qué significa?`,
                    correctAnswer: correct,
                    options
                };
            } else {
                const correct = item.es;
                const otherItems = allVocab.filter(v => v.es !== correct);
                const distractors = shuffle(otherItems).slice(0, 3).map(v => v.es);
                const options = shuffle([correct, ...distractors]);

                return {
                    question: `Traduce al español: "${item.pt}"`,
                    correctAnswer: correct,
                    options
                };
            }
        });

        setQuestions(generatedQuestions);
        setCurrentIndex(0);
        setScore(0);
        setIsFinished(false);
        setIsAnswered(false);
        setSelectedOption(null);
    };

    const handleOptionClick = (option: string) => {
        if (isAnswered) return;
        
        setSelectedOption(option);
        setIsAnswered(true);

        if (option === questions[currentIndex].correctAnswer) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setIsAnswered(false);
                setSelectedOption(null);
            } else {
                setIsFinished(true);
            }
        }, 1200);
    };

    if (questions.length === 0) return <div>Cargando test...</div>;

    if (isFinished) {
        const percentage = Math.round((score / questions.length) * 100);
        let feedback = '¡No te desanimes! La práctica hace al maestro.';
        if (percentage >= 80) feedback = '¡Excelente! ¡Ya hablas como un nativo!';
        else if (percentage >= 50) feedback = '¡Muy bien! Sigue practicando.';

        return (
            <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#009C3B] text-center animate-fade-in">
                <h3 className="text-3xl font-bold text-[#009C3B] mb-6">Test Completado</h3>
                <p className="text-2xl mb-2 text-gray-600">Tu puntuación:</p>
                <div className="text-7xl font-extrabold text-[#002776] mb-2">{score}/{questions.length}</div>
                <p className="text-xl text-gray-500 font-medium mb-8">({percentage}%)</p>
                <p className="text-xl text-gray-800 font-semibold mb-10 bg-green-50 p-4 rounded-lg inline-block border border-green-200">{feedback}</p>
                
                <div className="border-t border-gray-200 pt-8 mt-4">
                    <h4 className="text-2xl font-bold text-[#009C3B] mb-6">¿Quieres hablar portugués con fluidez?</h4>
                    <a 
                        href="https://go.hotmart.com/U103170151V" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center w-full gap-2 bg-[#FFDF00] text-[#002776] font-bold py-4 px-6 rounded-xl shadow-xl hover:bg-[#E5C800] transition-colors text-xl border border-yellow-500 mb-6"
                    >
                        <BookOpen className="w-6 h-6"/>
                        Iniciar Curso Digital
                    </a>
                </div>
                
                <button 
                    onClick={startQuiz} 
                    className="flex items-center justify-center gap-2 mx-auto bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg shadow-sm hover:bg-gray-300 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    Reiniciar Test
                </button>
            </div>
        );
    }

    const currentQ = questions[currentIndex];

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#009C3B] animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#009C3B]">🧠 Teste de Vocabulário</h2>
                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {currentIndex + 1} / {questions.length}
                </span>
            </div>
            
            <div className="mb-8">
                <p className="text-xl font-medium text-gray-800 leading-relaxed">{currentQ.question}</p>
            </div>

            <div className="flex flex-col space-y-3">
                {currentQ.options.map((option, idx) => {
                    let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center shadow-sm ";
                    
                    if (isAnswered) {
                        if (option === currentQ.correctAnswer) {
                            btnClass += "bg-green-100 border-[#009C3B] text-green-900";
                        } else if (option === selectedOption) {
                            btnClass += "bg-red-100 border-red-500 text-red-900";
                        } else {
                            btnClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
                        }
                    } else {
                        btnClass += "bg-white border-gray-100 hover:border-[#FFDF00] hover:bg-yellow-50 text-gray-700 cursor-pointer";
                    }

                    return (
                        <button 
                            key={idx} 
                            onClick={() => handleOptionClick(option)}
                            disabled={isAnswered}
                            className={btnClass}
                        >
                            <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-4 text-sm font-bold opacity-60">
                                {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="text-lg">{option}</span>
                        </button>
                    );
                })}
            </div>
            
            <div className="mt-6 text-right text-sm font-semibold text-gray-500 min-h-[24px]">
               {isAnswered && (
                   <span className={selectedOption === currentQ.correctAnswer ? "text-green-600" : "text-red-600"}>
                       {selectedOption === currentQ.correctAnswer ? "¡Correcto!" : "Incorrecto"}
                   </span>
               )}
            </div>
        </div>
    );
};

export default Quiz;