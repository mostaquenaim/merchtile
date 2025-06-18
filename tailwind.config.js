/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#042c24', // New dark green theme
                secondary: '#f72585', // Keep or adjust accent color
                accent: '#4cc9f0',  // Keep or adjust
                dark: '#1a1a2e',
                light: '#f8f9fa',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-in',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}