/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1.5rem', // Adjusted for better mobile spacing
			screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
				xl: '1280px',
        '2xl': '1440px', // Slightly wider for modern layouts
			},
		},
		extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Using Inter as a modern sans-serif
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0px' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0px' },
				},
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px hsl(var(--primary) / 0.2), 0 0 20px hsl(var(--accent) / 0.1)' },
          '50%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--accent) / 0.25)' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
			},
      boxShadow: {
        'input-focus': '0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary))',
        'card-hover': '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.03)',
        'card-hover-dark': '0 10px 15px -3px hsla(var(--primary)/0.1), 0 4px 6px -2px hsla(var(--primary)/0.05)',
      }
		},
	},
	plugins: [require('tailwindcss-animate')],
};