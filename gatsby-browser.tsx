import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/layout";
import "./src/assets/scss/normalize.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => <Layout {...props}>{element}</Layout>;
// Wraps every page in a component
