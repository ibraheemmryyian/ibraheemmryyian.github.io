
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                "background-alt": "#fafafa",
                card: "#ffffff",
                border: "#e5e5e7",
                "text-primary": "#000000",
                "text-secondary": "#52525b",
                accent: "#0066ff",
                "accent-hover": "#0052cc",
                "text-disabled": "#a1a1aa"
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
