/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                tiny: '12px',
                base: '14px',
            },
            fontFamily: {
                'sans': ["main-font"]
            },
            colors: {
                textBody: '#000000',
                danger: 'rgb(241 65 108)',
                themeLight: 'rgb(225 240 255)',
                theme: 'rgb(9 137 255)',
                success: 'rgb(80 205 137)'
            },
        },
    },
    plugins: [],
}