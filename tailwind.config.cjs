
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0f172a", // Slate 900
                "background-alt": "#1e293b", // Slate 800
                card: "#1e293b",
                border: "#334155", // Slate 700
                "text-primary": "#f8fafc", // Slate 50
                "text-secondary": "#94a3b8", // Slate 400
                accent: "#6366f1", // Indigo 500
                "accent-hover": "#4f46e5", // Indigo 600
                "text-disabled": "#475569"
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
