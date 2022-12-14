import type { GatsbyConfig } from "gatsby";

const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gunn-home-page`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@import "${__dirname}/src/assets/scss/_colors.scss";@import "${__dirname}/src/assets/fonts/font.css";@import "open-props/style";`,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
  ],
};

export default config;
