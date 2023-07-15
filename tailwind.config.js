/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ["main-font"]
            },
            colors: {
                textBody: '#000000',
                primary: '#0092EF',
            },
        },
    },
    plugins: [],
}