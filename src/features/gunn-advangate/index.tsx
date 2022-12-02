import React from "react";
import {
  CheckIcon,
  GunnBackground,
  IphoneMockup,
  MaintainClientForLife,
  WealthPro,
} from "../../assets/images";
import "./gunn-advantage.scss";

type GunnAdvantageProps = {
  text: string;
};

const GunnAdvantageItem = ({ text }: GunnAdvantageProps) => (
  <div className="gunn-advantage-content__item">
    <div>{text}</div>
    <img src={CheckIcon} alt="" />
  </div>
);

const gunnAdvantages = [
  "$0 Startup Cost and Free To Use",
  "Instant Custom Branded Experience",
  "Advanced Client Management",
  "Desktop, iPad, IOS & Android",
];

const GunnAdvantage = () => (
  <>
    <div className="gunn-advantage">
      <div className="gunn-advantage-application">
        <div className="gunn-advantage-application__container">
          <div className="gunn-advantage-application__header">
            Your Brand, Your Way.
          </div>
          <div>
            <img src={IphoneMockup} alt="" />
          </div>
          <div>
            <img src={WealthPro} alt="" />
          </div>
        </div>
      </div>
      <div className="gunn-advantage-content">
        <div className="gunn-advantage-content__container">
          <div className="gunn-advantage-content__wrapper">
            <div className="gunn-advantage-content__title">
              There Ain&apos;t Nothing Like This<span>.</span>
            </div>
            {gunnAdvantages.map((item) => (
              <GunnAdvantageItem key={item} text={item} />
            ))}
            <div className="gunn-advantage-content__gunn-icon">
              <img src={GunnBackground} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="gunn-advantage-footer">
      <img src={MaintainClientForLife} alt="" />
    </div>
  </>
);

export default GunnAdvantage;
