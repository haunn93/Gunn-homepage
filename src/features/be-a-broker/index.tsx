import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  ClockIcon,
  HeartIcon,
  NumberOne,
  PhoneIcon,
  PlayIcon,
  RealEstateAgent,
  TheBestBusinessCanGet,
} from "../../assets/images";
import CustomButton from "../../components/custom-button";
import { LaunchDemoButtonOutline } from "../../components/launch-demo-button";
import "./be-a-broker.scss";

type KeyBenefitItemProps = {
  icon: string;
  text: string;
};

const KeyBenefitItem = ({ icon, text }: KeyBenefitItemProps) => (
  <div className="be-a-broker-key-benefit__item">
    <img src={icon} alt="" />
    <div>{text}</div>
  </div>
);

const keyBenefits = [
  { icon: PhoneIcon, text: "Personalised app experience" },
  { icon: HeartIcon, text: "Increase brand retention & referrals" },
  { icon: ClockIcon, text: "Increase efficiencies and increase revenue" },
];

const BeABroker = () => (
  <div className="be-a-broker">
    <div className="be-a-broker__content">
      <div className="be-a-broker-content__container">
        <div className="be-a-broker-content__header">
          <div className="be-a-broker-content__header-top">
            Be a Gunn<span>.</span>
          </div>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={["Broker", 3000, "Advisor", 3000]}
            speed={10} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "1em" }}
            wrapper="div" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </div>
        <div className="be-a-broker-content__context">
          Gain a 360 view of your clients wealth and give them the best
          experience in the market.
        </div>
        <div className="be-a-broker-content__free-to-use">100% Free to Use</div>
      </div>
      <div className="be-a-broker-content-footer">
        <div className="be-a-broker-content-footer__how-it-work">
          <img src={PlayIcon} alt="" />
          <span>How it work</span>
        </div>
        <div className="be-a-broker-content-footer__the-best-business">
          <img src={TheBestBusinessCanGet} alt="" />
        </div>
      </div>
      <div className="be-a-broker__broker-image">
        <img src={RealEstateAgent} alt="" />
      </div>
      <div className="be-a-broker__number-one-image">
        <img src={NumberOne} alt="" />
      </div>
    </div>
    <div className="be-a-broker__gradient-line" />
    <div className="be-a-broker-key-benefit">
      <div className="be-a-broker-key-benefit__container">
        <div className="be-a-broker-key-benefit__wrapper">
          <div className="be-a-broker-key-benefit__title">Key Benefits</div>
          {keyBenefits.map((item) => (
            <KeyBenefitItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
        <div className="be-a-broker-key-benefit__button-container">
          <LaunchDemoButtonOutline />
          <CustomButton title="Signup" />
        </div>
      </div>
    </div>
  </div>
);

export default BeABroker;
