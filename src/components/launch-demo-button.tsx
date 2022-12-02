import React from "react";
import { RocketIcon, RocketWhiteIcon } from "../assets/images";
import CustomButton from "./custom-button";

const LaunchDemoButtonOutline = () => (
  <CustomButton title="Launch Demo" icon={RocketIcon} outline />
);

const LaunchDemoButton = () => (
  <CustomButton title="Launch Demo" icon={RocketWhiteIcon} />
);

export default LaunchDemoButton;
export { LaunchDemoButtonOutline };
