require("dotenv").config({
  path: `.env`,
});

const siteUrl = process.env.SITE_URL || `http://localhost:8000/`;

module.exports = {
  siteMetadata: {
    siteUrl: "https://devlifting.com",
    title: "Our heavy lifting will improve your web presence!",
    description:
      "DevLifting is your freelancer for creating accessible and conversion optimized websites.",
    keywords: ["bootstrap", "gatsby", "devLifting"],
    author: "@devLifting_",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap",
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(
            filter: {
              path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
            }
          ) {
            nodes {
              path
            }
          }
        }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: "weekly",
            priority: 0.7,
          };
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f07g68yd3yyd`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.devlifting.com`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `tracedSVG`,
        },
      },
    },
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`,
    //     languages: [`en`, `de`],
    //     defaultLanguage: `de`,
    //     siteUrl,
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false,
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: "/blog/:uid",
    //         getLanguageFromPath: true,
    //         excludeLanguages: ["en"],
    //       },
    //       {
    //         matchPath: "/preview",
    //         languages: ["en"],
    //       },
    //     ],
    //   },
    // },
  ],
};
