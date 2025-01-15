/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Adjust paths as needed
  theme: {
    extend: {
      screens: {
        // Custom screen sizes
        'xs': '475px', // Extra small screens
        '3xl': '1600px', // Extra large screens
      },
    },
    screens: {
      // Default Tailwind screen sizes
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }, 
    backgroundImage: {
      desktopBackground: "url('assets/images/background-mobile.png')",
      tabletBackground: "url('assets/images/background-tablet.png')",
      MobileBackground: "url('assets/images/background-mobile.png')",
      bgLines: "url('assets/images/pattern-lines.svg')",
      ticketBg: "url('assets/images/pattern-ticket.svg')",
    },
  },
  plugins: [],
};
