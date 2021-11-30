module.exports = {
  siteMetadata: {
    siteUrl: "https://devlifting.com",
    title: "Creating websites that build your business up!",
    description:
      "DevLifting is your freelancer for creating accessible and conversion optimized websites.",
    keywords: "bootstrap, gatsby, devlifting",
    author: "mkt",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
