import classNames from "classnames";
import React from "react";
import "./custom-button.scss";

type CustomButtonProps = {
  title: string;
  icon?: string;
  outline?: boolean;
};

const CustomButton = ({ title, icon, outline }: CustomButtonProps) => (
  <div className={classNames("custom-button", { outline: Boolean(outline) })}>
    {title}
    {icon && <img src={icon} alt="" />}
  </div>
);

export default CustomButton;
