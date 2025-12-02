export interface VocabularyItem {
    pt: string;
    pron: string;
    es: string;
    context: string;
    frasePt: string;
    fraseEs: string;
    frasePron: string;
    icon?: string;
    color?: string; // Hex code
    text?: 'white' | 'black';
    border?: boolean;
}

export interface CategoryData {
    id: string;
    title: string;
    desc: string;
    items: VocabularyItem[];
}

export interface QuizQuestion {
    question: string;
    correctAnswer: string;
    options: string[];
}

export type ViewState = 'home' | 'quiz' | string; // 'string' allows for dynamic category IDs