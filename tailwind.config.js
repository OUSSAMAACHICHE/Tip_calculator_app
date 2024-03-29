/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.js", "./index.html"];
export const theme = {
  extend: {
    colors: {
      primary: {
        StrongCyan: "hsl(172, 67%, 45%)",
      },
      neutral: {
        veryDarkCyan: "hsl(183, 100%, 15%)", 
        darkGrayishCyan: "hsl(186, 14%, 43%)", 
        grayishCyan: "hsl(184, 14%, 56%)", 
        lightGrayishCyan: "hsl(185, 4%, 84%)", 
        veryLightGrayishCyan: "hsl(189, 41%, 97%)", 
        white: "hsl(0, 0%, 100%)", 
      },
    },
    fontFamily: {
      bodyFont: ["Space Mono", "monospace"],
    }, 
    fontSize: {
      fontInputs: '24px',
    }
  }
};
