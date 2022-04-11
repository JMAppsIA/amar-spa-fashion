import Dark from "Themes/Dark";

const Slides = [
    {
        title: 'Relajate',
        color: Dark.colors.primaryBackground,
        content: {
            title: 'Encuentra lo mejor ⭐',
            description: 'Tienes dudas sobre qué elegir? No te preocupes! Brindamos asesoria inmediata!',
        },
        image: require('Assets/images/girl-one-no-bg.png')
    },
    {
        title: 'Modernizate',
        color: Dark.colors.secondaryBackground,
        content: {
            title: 'Escúchalo primero, encuéntralo primero 😎',
            description: '¿Buscas servicios de última calidad? ¡Encuentralos acá!'
        },
        image: require('Assets/images/skin-care.png')
    },
    {
        title: 'Transformate',
        color: Dark.colors.thirdBackground,
        content: {
            title: 'Tu cuerpo, tu apariencia 🤴 👸',  
            description: 'Empieza a cuidar tu apariencia con los mejores médicos especializados 👩‍⚕️ 👨‍⚕️'
        },
        image: require('Assets/images/girl-one-no-bg.png')
    },
    {
        title: 'Estimate',
        color: Dark.colors.fourthBackground,
        content: {
            title: 'Mirate bien, siéntete bien 💆',
            description: 'Descubre lo último en cuidado corporal y facial y explora tu personalidad'
        },
        image: require('Assets/images/girl-one-no-bg.png')
    }
];

export default Slides;