import { navigate } from "gatsby";
import React from "react";
import { LogoDark } from "../../assets/images";
import "./navigation-bar.scss";

type navigationLogoProps = { src: string };

const navigationItem = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
  { title: "Login", href: "/login" },
];

const NavigationLogo = ({ src }: navigationLogoProps) => (
  <img src={src} alt="" />
);

const NavigationBar = () => (
  <div className="navigation-bar">
    <div className="navigation-bar__container">
      <div
        className="navigation-bar__icon"
        onClick={() => {
          navigate("/");
        }}
      >
        <NavigationLogo src={LogoDark} />
      </div>
      <div className="navigation-bar__items">
        {navigationItem.map(({ title, href }) => (
          <div
            key={title}
            className="navigation-bar-items__item"
            onClick={() => {
              navigate(href);
            }}
          >
            {title}
          </div>
        ))}
        <button type="button" className="navigation-bar__button">
          Sign-up
        </button>
      </div>
    </div>
  </div>
);

export default NavigationBar;
