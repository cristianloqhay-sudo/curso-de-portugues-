import { CategoryData } from './types';

export const DATA: Record<string, CategoryData> = {
    saludos: {
        id: 'saludos',
        title: "Saudações e Básicos",
        desc: "Comece qualquer conversa com confiança. 'Olá' e 'Tudo bem?' são as chaves para a simpatia em português.",
        items: [
            { pt: "Olá", pron: "o-lá", es: "Hola", context: "Universal", frasePt: "Olá, como vai você?", fraseEs: "Hola, ¿cómo te va?", frasePron: "o-lá, kó-mo vái vo-sê?" },
            { pt: "Bom dia", pron: "bon dí-a / bon yí-a", es: "Buenos días", context: "Mañana", frasePt: "Bom dia, o café está pronto.", fraseEs: "Buenos días, el café está listo.", frasePron: "bon yí-a, u ka-fé es-tá prón-tu" },
            { pt: "Boa tarde", pron: "bô-a tár-de", es: "Buenas tardes", context: "Tarde", frasePt: "Boa tarde, tudo bem?", fraseEs: "Buenas tardes, ¿todo bien?", frasePron: "bô-a tár-de, tú-du ben?" },
            { pt: "Boa noite", pron: "bô-a nói-te", es: "Buenas noches", context: "Noche", frasePt: "Boa noite, até amanhã.", fraseEs: "Buenas noches, hasta mañana.", frasePron: "bô-a nói-te, a-té a-ma-nhã" },
            { pt: "Obrigado/a", pron: "o-bri-gá-du/da", es: "Gracias", context: "Hombres dicen 'Obrigado', mujeres 'Obrigada'", frasePt: "Muito obrigado pela ajuda.", fraseEs: "Muchas gracias por la ayuda.", frasePron: "múin-tu o-bri-gá-du pé-la a-jú-da" },
            { pt: "Por favor", pron: "pur fa-vôr", es: "Por favor", context: "Peticiones", frasePt: "Uma água, por favor.", fraseEs: "Un agua, por favor.", frasePron: "ú-ma á-gua, pur fa-vôr" },
            { pt: "Desculpe", pron: "des-kúl-pe", es: "Disculpa / Perdón", context: "Apología", frasePt: "Desculpe, não entendi.", fraseEs: "Disculpa, no entendí.", frasePron: "des-kúl-pe, nãu en-ten-dí" },
            { pt: "Com licença", pron: "kon li-sên-sa", es: "Con permiso", context: "Para pasar o interrumpir", frasePt: "Com licença, posso entrar?", fraseEs: "Con permiso, ¿puedo entrar?", frasePron: "kon li-sên-sa, pó-su en-trár?" },
            { pt: "Tudo bem?", pron: "tú-du bẽin?", es: "¿Todo bien? / ¿Cómo estás?", context: "Muy común", frasePt: "E aí, tudo bem?", fraseEs: "¿Qué tal, todo bien?", frasePron: "e a-í, tú-du bẽin?" }
        ]
    },
    presentacion: {
        id: 'presentacion',
        title: "Apresentações Pessoais",
        desc: "Frases essenciais para falar de si mesmo e conhecer outros.",
        items: [
            { pt: "Chamo-me...", pron: "shá-mu me", es: "Me llamo...", context: "Nombre (Formal/Portugal)", frasePt: "Chamo-me João.", fraseEs: "Me llamo João.", frasePron: "shá-mu me jo-ão" },
            { pt: "Meu nome é...", pron: "méu nô-me é", es: "Mi nombre es...", context: "Nombre (Común en Brasil)", frasePt: "Meu nome é Ana.", fraseEs: "Mi nombre es Ana.", frasePron: "méu nô-me é á-na" },
            { pt: "Sou de...", pron: "sô de", es: "Soy de...", context: "Origen", frasePt: "Sou de Espanha, mas moro aqui.", fraseEs: "Soy de España, pero vivo aquí.", frasePron: "sô de es-pá-nha, mas mó-ru a-kí" },
            { pt: "Moro em...", pron: "mó-ru ẽin", es: "Vivo en...", context: "Residencia", frasePt: "Moro em Lisboa há um ano.", fraseEs: "Vivo en Lisboa hace un año.", frasePron: "mó-ru ẽin liz-bô-a á um á-nu" },
            { pt: "Prazer", pron: "pra-zêr", es: "Mucho gusto", context: "Saludo inicial", frasePt: "Muito prazer em conhecer você.", fraseEs: "Mucho gusto en conocerte.", frasePron: "múin-tu pra-zêr ẽin ko-nhe-sêr vo-sê" },
            { pt: "De onde você é?", pron: "de ôn-de vo-sê é", es: "¿De dónde eres?", context: "Pregunta", frasePt: "Você fala diferente, de onde você é?", fraseEs: "Hablas diferente, ¿de dónde eres?", frasePron: "vo-sê fá-la di-fe-rên-te, de ôn-de vo-sê é?" }
        ]
    },
    numeros: {
        id: 'numeros',
        title: "Números (1-10)",
        desc: "Atenção à pronúncia do 'Um' e 'Seis'.",
        items: [
            { pt: "Um", pron: "um", es: "Uno", context: "Contar", frasePt: "Quero um café.", fraseEs: "Quiero un café.", frasePron: "ké-ru um ka-fé" },
            { pt: "Dois", pron: "dôis", es: "Dos", context: "Contar", frasePt: "São dois reais.", fraseEs: "Son dos reales.", frasePron: "são dôis re-áis" },
            { pt: "Três", pron: "três", es: "Tres", context: "Contar", frasePt: "Tenho três irmãos.", fraseEs: "Tengo tres hermanos.", frasePron: "té-nhu três ir-mãos" },
            { pt: "Quatro", pron: "kuá-tru", es: "Cuatro", context: "Contar", frasePt: "Mesa para quatro pessoas.", fraseEs: "Mesa para cuatro personas.", frasePron: "mé-za pá-ra kuá-tru pe-sô-as" },
            { pt: "Cinco", pron: "sín-ku", es: "Cinco", context: "Contar", frasePt: "Cinco minutos, por favor.", fraseEs: "Cinco minutos, por favor.", frasePron: "sín-ku mi-nú-tus, pur fa-vôr" },
            { pt: "Seis", pron: "mêi-a / sêis", es: "Seis", context: "A veces se dice 'meia' (dúzia) al teléfono", frasePt: "O número é seis, sete, oito.", fraseEs: "El número es seis, siete, ocho.", frasePron: "u nú-me-ru é sêis, sé-te, ôi-tu" },
            { pt: "Sete", pron: "sé-te", es: "Siete", context: "Contar", frasePt: "Sete dias na semana.", fraseEs: "Siete días en la semana.", frasePron: "sé-te dí-as na se-mâ-na" },
            { pt: "Oito", pron: "ôi-tu", es: "Ocho", context: "Contar", frasePt: "Trabalho oito horas por dia.", fraseEs: "Trabajo ocho horas por día.", frasePron: "tra-bá-lhu ôi-tu ó-ras pur dí-a" },
            { pt: "Nove", pron: "nó-ve", es: "Nueve", context: "Contar", frasePt: "O filme começa às nove.", fraseEs: "La película empieza a las nueve.", frasePron: "u fíl-me ko-mé-sa às nó-ve" },
            { pt: "Dez", pron: "déz", es: "Diez", context: "Contar", frasePt: "Nota dez!", fraseEs: "¡Nota diez! (Excelente)", frasePron: "nó-ta déz" }
        ]
    },
    colores: {
        id: 'colores',
        title: "Cores Essenciais",
        desc: "Muitas cores são similares, mas a pronúncia muda. 'Vermelho' é muito diferente de 'Rojo'.",
        items: [
            { pt: "Vermelho", pron: "ver-mé-lhu", es: "Rojo", context: "Atenção ao LH", color: "#FF0000", text: "white", frasePt: "A bandeira é vermelha e verde.", fraseEs: "La bandera es roja y verde.", frasePron: "a ban-dêi-ra é ver-mé-lha e vêr-de" },
            { pt: "Verde", pron: "vêr-de", es: "Verde", context: "Natureza", color: "#009C3B", text: "white", frasePt: "Gosto de chá verde.", fraseEs: "Me gusta el té verde.", frasePron: "gós-tu de chá vêr-de" },
            { pt: "Amarelo", pron: "a-ma-ré-lu", es: "Amarillo", context: "Sol", color: "#FFDF00", text: "black", frasePt: "O sol é amarelo.", fraseEs: "El sol es amarillo.", frasePron: "u sól é a-ma-ré-lu" },
            { pt: "Preto", pron: "prê-tu", es: "Negro", context: "Oscuro", color: "#000000", text: "white", frasePt: "Café preto sem açúcar.", fraseEs: "Café negro sin azúcar.", frasePron: "ka-fé prê-tu sẽin a-sú-kar" },
            { pt: "Branco", pron: "brãn-ku", es: "Blanco", context: "Claro", color: "#FFFFFF", text: "black", border: true, frasePt: "A paz é representada pelo branco.", fraseEs: "La paz es representada por el blanco.", frasePron: "a páz é re-pre-zen-tá-da pé-lu brãn-ku" },
            { pt: "Azul", pron: "a-zúl", es: "Azul", context: "Cielo", color: "#002776", text: "white", frasePt: "O céu está azul hoje.", fraseEs: "El cielo está azul hoy.", frasePron: "u séu es-tá a-zúl hó-je" }
        ]
    },
    animales: {
        id: 'animales',
        title: "Animais e Casa",
        desc: "Vocabulário do dia a dia.",
        items: [
            { pt: "Cão / Cachorro", pron: "cão / ca-shô-ru", es: "Perro", context: "Animal", icon: "🐕", frasePt: "O cachorro late muito.", fraseEs: "El perro ladra mucho.", frasePron: "u ca-shô-ru lá-te múin-tu" },
            { pt: "Gato", pron: "gá-tu", es: "Gato", context: "Animal", icon: "🐈", frasePt: "O gato gosta de leite.", fraseEs: "Al gato le gusta la leche.", frasePron: "u gá-tu gós-ta de lêi-te" },
            { pt: "Pássaro", pron: "pá-sa-ru", es: "Pájaro", context: "Animal", icon: "🐦", frasePt: "Olha aquele pássaro bonito.", fraseEs: "Mira aquel pájaro bonito.", frasePron: "ó-lha a-kê-le pá-sa-ru bo-ní-tu" },
            { pt: "Peixe", pron: "pêi-she", es: "Pez", context: "Animal", icon: "🐟", frasePt: "Comemos peixe no almoço.", fraseEs: "Comimos pescado en el almuerzo.", frasePron: "ko-mê-mos pêi-she nu al-mô-su" },
            { pt: "Mesa", pron: "mê-za", es: "Mesa", context: "Casa", icon: "🪑", frasePt: "O jantar está na mesa.", fraseEs: "La cena está en la mesa.", frasePron: "u jan-tár es-tá na mê-za" },
            { pt: "Cama", pron: "kã-ma", es: "Cama", context: "Casa", icon: "🛏️", frasePt: "Quero dormir na minha cama.", fraseEs: "Quiero dormir en mi cama.", frasePron: "ké-ru dor-mír na mí-nha kã-ma" },
            { pt: "Janela", pron: "ja-né-la", es: "Ventana", context: "Casa", icon: "🪟", frasePt: "Feche a janela, está frio.", fraseEs: "Cierra la ventana, hace frío.", frasePron: "fé-she a ja-né-la, es-tá frí-u" },
            { pt: "Porta", pron: "pór-ta", es: "Puerta", context: "Casa", icon: "🚪", frasePt: "A porta está aberta.", fraseEs: "La puerta está abierta.", frasePron: "a pór-ta es-tá a-bér-ta" }
        ]
    },
    viajes: {
        id: 'viajes',
        title: "Viagem e Saúde",
        desc: "Frases críticas para emergências e aeroportos.",
        items: [
            { pt: "Passaporte", pron: "pa-sa-pór-te", es: "Pasaporte", context: "Aeropuerto", frasePt: "Esqueci meu passaporte.", fraseEs: "Olvidé mi pasaporte.", frasePron: "es-ke-sí méu pa-sa-pór-te" },
            { pt: "Saída", pron: "sa-í-da", es: "Salida", context: "Aeropuerto", frasePt: "Onde é a saída?", fraseEs: "¿Dónde es la salida?", frasePron: "ôn-de é a sa-í-da?" },
            { pt: "Bagagem", pron: "ba-gá-jẽin", es: "Equipaje", context: "Aeropuerto", frasePt: "Minha bagagem não chegou.", fraseEs: "Mi equipaje no llegó.", frasePron: "mí-nha ba-gá-jẽin nãu she-gôu" },
            { pt: "Sinto-me mal", pron: "sín-tu me mál", es: "Me siento mal", context: "Salud", frasePt: "Sinto-me mal, estou tonto.", fraseEs: "Me siento mal, estoy mareado.", frasePron: "sín-tu me mál, es-tôu tôn-tu" },
            { pt: "Médico", pron: "mé-di-ku", es: "Médico", context: "Emergencia", frasePt: "Preciso de um médico agora.", fraseEs: "Necesito un médico ahora.", frasePron: "pre-sí-zu de um mé-di-ku a-gó-ra" },
            { pt: "Socorro / Ajuda", pron: "so-kô-ru / a-jú-da", es: "Ayuda/Socorro", context: "Emergencia", frasePt: "Socorro! Chamem a polícia!", fraseEs: "¡Socorro! ¡Llamen a la policía!", frasePron: "so-kô-ru! shá-mẽin a po-lí-si-a!" }
        ]
    },
    clima: {
        id: 'clima',
        title: "Clima e Tempo",
        desc: "Expressões úteis sobre o tempo.",
        items: [
            { pt: "Faz frio", pron: "fáz frí-u", es: "Hace frío", context: "Clima", icon: "❄️", frasePt: "Hoje faz muito frio.", fraseEs: "Hoy hace mucho frío.", frasePron: "hô-je fáz múin-tu frí-u" },
            { pt: "Faz calor", pron: "fáz ca-lôr", es: "Hace calor", context: "Clima", icon: "☀️", frasePt: "Faz calor no Rio de Janeiro.", fraseEs: "Hace calor en Río de Janeiro.", frasePron: "fáz ca-lôr nu rí-u de ja-nêi-ru" },
            { pt: "Chove", pron: "shó-ve", es: "Llueve", context: "Clima", icon: "🌧️", frasePt: "Chove lá fora.", fraseEs: "Llueve afuera.", frasePron: "shó-ve lá fó-ra" },
            { pt: "De manhã", pron: "de ma-nhã", es: "Por la mañana", context: "Tiempo", frasePt: "Gosto de correr de manhã.", fraseEs: "Me gusta correr por la mañana.", frasePron: "gós-tu de co-rrêr de ma-nhã" },
            { pt: "De noite", pron: "de nói-te", es: "Por la noche", context: "Tiempo", frasePt: "Vamos sair de noite.", fraseEs: "Vamos a salir por la noche.", frasePron: "vá-mus sa-ír de nói-te" }
        ]
    }
};