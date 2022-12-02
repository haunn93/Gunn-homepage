import React, { ReactNode } from "react";
import {
  CalendarIcon,
  ClintOnAppDesktop,
  HandPhoneIcon,
  LiveChatIcon,
  MailIcon,
} from "../../assets/images";
import "./contact.scss";

type ContactInfoProps = {
  icon: string;
  title: string | ReactNode;
};

const StartLiveChatButton = () => (
  <div className="contact-info__button">Start Live Chat</div>
);

const CONTACT_INFO = [
  { icon: HandPhoneIcon, title: "(02) 89 732 732" },
  { icon: CalendarIcon, title: "Book call back" },
  { icon: MailIcon, title: "clint@gunn.com.au" },
  { icon: LiveChatIcon, title: <StartLiveChatButton /> },
];
const ContactInfoItem = ({ title, icon }: ContactInfoProps) => (
  <div className="contact-info__item">
    <img src={icon} alt="" />
    <div>{title}</div>
  </div>
);

const generateContactInfo = () =>
  CONTACT_INFO.map(({ icon, title }) => (
    <ContactInfoItem title={title} icon={icon} key={icon} />
  ));

const Contact = () => (
  <div className="contact">
    <div className="contact-info">
      <div className="contact-info__container">
        <div className="contact-info__header">
          Find out how we can modernise your business <span>now,</span> and into
          the <span>future.</span>
        </div>
        <div className="contact-info__item-container">
          {generateContactInfo()}
        </div>
      </div>
    </div>
    <div className="contact-image">
      <img src={ClintOnAppDesktop} alt="" />
    </div>
  </div>
);

export default Contact;
