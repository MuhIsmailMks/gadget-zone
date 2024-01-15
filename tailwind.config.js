/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      // responsive screen
      screens: {
        // Min width
        // Desktop breakpoints
        'xl-desktop': { 'min': '1800px' },
        'x-desktop': { 'min': '1400px' }, 
        's-desktop': { 'min': '1200px' },
  
        //  breakpoints device
        's_desktop-xl_tablet': {'max': '1400px', 'min': '800px'},   
        'mobile': { 'max': '1100px' },
        'phone-mtablet': { 'max': '800px' },

        // tablet
        'tablet' : { 'min': '600px', 'max': '1200px' },
        'xl-tablet': { 'min': '800px', 'max': '1200px' },
        's-tablet': { 'min': '600px', 'max': '800px' },
        
        // phone
        'phone': { 'max': '601px' },
        'xl-phone': { 'min': '430px', 'max': '601px' },
        'x-phone': { 'min': '1px', 'max': '429.99px' },  
  
        // Max width
        'max-s-desktop': { 'min': '1200px', 'max': '1400px' },
        'max-xl-tablet': { 'min': '800px', 'max': '1200px' },
        'max-LTablet': { 'min': '600px',  'max': '800px' },
        'phone-tablet': { 'max': '710px' },

      },

      // colors
      colors: {
        'primary-color': '#439CEF',
        'primary-gradient-color': '#0836C1',
      },

      // dropshadow /  box shadow
      dropShadow: {
        'card' : '0px 2px 4px  rgba(0, 0, 0, 0.2)'
      },

      boxShadow: {
        'smallBoxShadow1': ' 0px 4px 108px 6vw rgba(255, 255, 255, 0.351)',
        'smallBoxShadowPhone1': ' 0px 4px 80px 37px rgba(255, 255, 255, 0.351)',
        'smallBoxShadow2': ' 0px 4px 88px 72px rgba(255, 255, 255, 0.251)',
        'shopBagComponentsShadow': ' 0px 1px 8.5px -1px rgba(0, 0, 0, 0.32)',
      },

      // font family
      fontFamily: { 
        'Lato': ['Lato', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'maitre': ['Maitree', 'serif'],
        'plusJakartaSans': ['Plus Jakarta Sans', 'sans-serif'],
        'saira': ['Saira', 'sans-serif'],
        'kufam': ['Kufam', 'sans-serif'],
      },

      // background image
      backgroundImage: {
        'bgImage': "url('/src/app/images/headerimage1.png')", 

        
        'prevButtonHeader': "url('src/app/icons/prevButton.svg')", 
        'nextButtonHeader': "url('src/app/icons/nextButton.svg')", 
      }, 

     
    },
  },
  plugins: [],
}