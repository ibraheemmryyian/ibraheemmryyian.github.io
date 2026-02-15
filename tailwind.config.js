
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0f172a",
                "background-alt": "#1e293b",
                card: "#1e293b",
                border: "#334155",
                "text-primary": "#f8fafc",
                "text-secondary": "#94a3b8",
                accent: "#6366f1",
                "accent-hover": "#4f46e5",
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
