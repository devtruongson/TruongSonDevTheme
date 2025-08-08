/** @type {import('tailwindcss').Config} */
module.exports = {
    important: false,
    content: ['./**/*.{liquid,json}'],
    theme: {
        extend: {
            fontFamily: {
                quincy: ['QuincyCF', 'sans-serif'],
                sofia: ['SofiaPro', 'sans-serif'],
                suisse: ['SuisseIntl', 'sans-serif'],
                icons: ['OkeWidgetIcons'],
            },
        },
    },
    plugins: [],
}

