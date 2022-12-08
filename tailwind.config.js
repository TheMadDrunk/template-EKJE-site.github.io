/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css}"],
  theme: {
    extend: {
      colors : {
        dblue : '#182338',
        dwhite : '#baaca1'
      },
      fontFamily: {
        ssans: [
          "'Quicksand', sans-serif",
        ]
      },
      
      
    },
  },
  plugins: [],
}

//npx tailwindcss -i ./src/input.css -o ./style/output.css --watch