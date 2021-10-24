module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/screens/**/*.{html,js}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      60: "60px",
    },

    extend: {
      height: {
        xl: "60px",
      },
      inset: {
        15: "15%",
      },
      colors: {
        gray50: "rgba(0, 0, 0, 0.8)",
        gray450: "rgba(51, 51, 51, 0.5)",
        netflixgray: "#333333",
        main: "#e50914",
      },
      backgroundImage: (theme) => ({
        "login-screen":
          'url("https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/05f7f3d2-dc99-45e5-a338-7a450079a1ca/NP-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg")',
      }),
      translate: {
        150: "-110%",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      scale: ["hover"],
    },
  },
  plugins: [],
};
