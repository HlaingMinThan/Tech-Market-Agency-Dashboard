/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                tiny: '12px',
                base: '14px',
                small: '80%'
            },
            fontFamily: {
                'sans': ["main-font"]
            },
            colors: {
                textBody: '#000000',
                danger: 'rgb(241 65 108)',
                themeLight: 'rgb(225 240 255)',
                theme: 'rgb(9 137 255)',
                success: 'rgb(80 205 137)',
                info: 'rgb(62 151 255)',
                warning: 'rgb(255 152 0)'
            },
        },
    },
    plugins: [],
}