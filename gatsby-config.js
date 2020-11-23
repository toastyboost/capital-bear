const dotenv = require("dotenv");

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProduction = process.env.NODE_ENV === "production";

const siteUrl = "https://toastyboost.github.io";

 
module.exports = {
  pathPrefix: !isProduction ? "/capital-bear" : '',
  proxy: {
    prefix: "/api",
    url: "https://fininfo.iqoption.com",
  },
  siteMetadata: {
    siteUrl,
    themeColor: "#2c52da",
    backgroundColor: "#2c52da",
    pathPrefix: null,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-webpack-size",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: process.env.NODE_ENV !== "production",
        fileName: true,
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "~/ui": `${__dirname}/src/ui`,
          "~/static": `${__dirname}/src/static`,
          "~/styles": `${__dirname}/src/styles`,
          "~/libs": `${__dirname}/src/libs`,
          "~/store": `${__dirname}/src/store`,
        },
        extensions: ["js, ts, tsx"],
      },
    },
  ],
};
