module.exports = {
  theme: {
    extend: {
      fontSize: {
        title1: "72px",
        title2: "30px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          xs: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "7rem",
          "2xl": "12rem",
        },
      },
      borderRadius: {
        xl: "30px",
        xxl: "50px",
      },
      colors: {
        lightBlue: "#8583e1",
        blue: "#007bff",
        darkBlue: "#100f3a",
        dark: "#232323",
        darkGrey: "#7a798c",
        grey: "#a5a5a5",
        lightGrey: "#9f9fb0",
        whiteGrey: "#f5f0f0",
        white: "#ffffff",
      },
      spacing: {
        30: "30px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
        110: "110px",
        120: "120px",
        130: "130px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    require("daisyui"),
  ],
  // daisyUI config (optional)
  // daisyui: {
  //     styled: true,
  //     themes: true,
  //     themes: [
  //         {
  //             mytheme: {
  //                 primary: "#4B6BFB",
  //                 secondary: "#7B92B2",
  //                 accent: "#67CBA0",
  //                 neutral: "#181A2A",
  //                 "base-100": "#FFFFFF",
  //                 info: "#141c3a",
  //                 success: "#36D399",
  //                 warning: "#fcd34d",
  //                 error: "#ef4444",
  //                 black: "#000",
  //             },
  //         },
  //     ],
  //     base: true,
  //     utils: true,
  //     logs: true,
  //     rtl: false,
  //     prefix: "",
  //     darkTheme: "night",
  // },
};
