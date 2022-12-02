import { navigate } from "gatsby";
import React from "react";
import { LogoLight } from "../../assets/images";
import "./footer.scss";

type NavigationItemProps = {
  title: string;
  href: string;
};

const NAVIGATION_LIST = [
  { title: "Home", href: "/" },
  { title: "Our Story", href: "#" },
  { title: "Features", href: "#" },
  { title: "Login", href: "#" },
];

const CompanyContact = () => {
  const contactType = [
    { type: "Call", data: "(02) 9133 4008" },
    {
      type: "Email",
      data: "support@gunn.com.au",
    },
  ];
  return (
    <div className="primary-footer-get-in-touch__contact-info">
      {contactType.map((type) => (
        <div className="primary-footer-get-in-touch__contact" key={type.type}>
          <div>{type.type}:</div>
          <span>{type.data}</span>
        </div>
      ))}
    </div>
  );
};

const NavigationItem = ({ title, href }: NavigationItemProps) => (
  <div
    className="footer-nagivation-bar__item"
    onClick={() => {
      navigate(href);
    }}
  >
    {title}
  </div>
);

const generateNavitationBar = () =>
  NAVIGATION_LIST.map(({ title, href }) => (
    <div className="footer-nagivation-bar__container" key={title}>
      <NavigationItem title={title} href={href} />
    </div>
  ));

const PrimaryFooter = () => (
  <div className="footer__primary-footer">
    <div className="primary-footer-nagivation">
      <div className="primary-footer-nagivation__icon">
        <img src={LogoLight} alt="" />
      </div>
      <div className="primary-footer-nagivation__navigation-bar">
        {generateNavitationBar()}
      </div>
    </div>
    <div className="primary-footer-get-in-touch">
      <div className="primary-footer-get-in-touch__time-info">
        <div className="primary-footer-get-in-touch__header">Get In Touch</div>
        <div className="primary-footer-get-in-touch__item">
          Weekdays 8AM - 8PM AEST
        </div>
        <div className="primary-footer-get-in-touch__item">
          Saturday 10AM - 4PM
        </div>
        <div className="primary-footer-get-in-touch__item">
          Sunday - We Enjoy Australia
        </div>
      </div>
      <CompanyContact />
    </div>
  </div>
);
const SecondaryFooter = () => (
  <div className="footer__secondary-footer">GUNN FINTECH | ACN 640 789 813</div>
);

const Footer = () => (
  <div className="footer">
    <PrimaryFooter />
    <SecondaryFooter />
  </div>
);

export default Footer;
