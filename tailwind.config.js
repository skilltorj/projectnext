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
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
      },
      screens: {
        xl: '1439px', // Adjust as per your need
        'xs': '375px', // Custom breakpoint for 375px
        'sm-xs': '425px', // Custom breakpoint for 420px
        'xs-lg': {min: '1440px', max:'1496px'},
        'custom-change':{min:'1496px', max:'1536px'},
        'range-custom': {min: '640px', max:'768px'},
        'range': {min: '440px', max:'500px'},
        'custom': {min: '500px', max:'510px'},
        'custom-md': {min:'510px', max:'520px'},
        'custom-lg':{min:'520px', max: '530px'},
        'custom-sm':{min:'530px', max:'540px'},
        'custom-xl':{min:'540px', max:'550px'},
        'range-sm':{min:'550px', max:'560px'},
        'range-md':{min: '560px', max:'570px'},
        'range-lg':{min:'570px', max:'580px'},
        'range-xl': {min:'580px', max:'590px'},
        'range-xs-sm':{min:'590px', max:'600px'},
        'custom-xs':{min: '600px', max: '630px'},
        'range-xs': {min: '630px', max:'640px'},
        'md-xs': {min: '768px', max:'778px'},
        'ms-md':{min: '778px', max:'800px'},
        'md-ms':{min:'800px', max:'900px'},
        'sm-md':{min:'900px', max:'1000px'},
        'lg-md':{min:'1000px', max:'1024px'},
        'lg-sm':{min:'1024px', max:'1440px'},
        'md-lg':{min:'320px', max:'375px'},
        'xss':'1024px',
        'ls':'1440px',
        'lx':{min:'1441px', max:'1460px'},
        'sl':{min:'1460px', max:'1490px'},
        'lx-sl':{min:'1490px', max:'1520px'},
        'xss-sl':{min:'1520px', max:'1536px'},
        'sl-xss':{min:'1536px', max:'1560px'},
        'lx-xss':{min:'1560px', max:'1600px'},
        'xss-lx':{min:'1600px', max:'1650px'},
        'lg-ls-ms':{min:'1650px', max:'1697px'},
        'ms-ls-lg':{min:'1697px', max:'1710px'},
        'ms':'320px'
        
      },

      brightness: {
        70: '.70',
        175: '1.75',
      }


    },
     
  },
  plugins: [],
}