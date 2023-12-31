const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class','.darkdark'],
    content: [
        "./components/**/*.{js,vue,ts}",
        "./shared/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    25: "#fafafa",
                    50: "#f2f2f2",
                    100: "#e6e6e6",
                    200: "#cccccc",
                    300: "#b3b3b3",
                    400: "#999999",
                    500: "#808080",
                    600: "#666666",
                    700: "#4d4d4d",
                    800: "#333333",
                    900: "#1a1a1a",
                    925: "#0d0d0d",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('daisyui'),
        plugin(function ({addUtilities}) {
            addUtilities({
                '.bg-green-striped': {
                    'background-image': `linear-gradient(45deg, #0a2000 10%, transparent 10%,
            transparent 20%, #0a2000 20%, #0a2000 30%, transparent 30%, transparent 40%,
            #0a2000 40%, #0a2000 50%, transparent 50%, transparent 60%, #0a2000 60%,
            #0a2000 70%, transparent 70%, transparent 80%, #0a2000 80%, #0a2000 90%,
            transparent 90%, transparent)`,
                },
            })
        })
    ],
    daisyui: {
        themes: [
            {
                light: {

                    "primary": "#1c1917",

                    "secondary": "#76eabb",

                    "accent": "#ec4899",

                    "neutral": "#ffffff",

                    "base-100": "#f4f4f4",

                    "info": "#8ccac1",

                    "success": "#10b981",

                    "warning": "#ffd261",

                    "error": "#e11d48",
                },
                dark: {

                    "primary": "#334154",

                    "secondary": "#76eabb",

                    "accent": "#ec4899",

                    "neutral": "#000000",

                    "base-100": "#171717",

                    "info": "#b90606",

                    "success": "#10b981",

                    "warning": "#ffd261",

                    "error": "#e11d48",
                },
            },
        ],
    },
}