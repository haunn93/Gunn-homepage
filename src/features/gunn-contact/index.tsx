import React, { MouseEventHandler } from "react";
import { ClintPhoto } from "../../assets/images";
import "./gunn-contact.scss";

type CustomButtonProps = {
  label: string;
  action: MouseEventHandler<HTMLDivElement>;
};

const CustomButton = ({ label, action }: CustomButtonProps) => (
  <div className="gunn-contact-custom-button" onClick={action}>
    {label}
  </div>
);

const GunnContact = () => {
  const handleBookCallBack = () => {
    console.log("clicked");
  };
  return (
    <div className="gunn-contact">
      <div className="gunn-contact-say-g-day">
        <div className="gunn-contact-say-g-day__container">
          <div className="gunn-contact-say-g-day__wrapper">
            <div className="gunn-contact-say-g-day__title">
              Say G’Day<span>.</span>
            </div>
            <div className="gunn-contact-say-g-day__phone-number">
              Call Now <span>0416 338 438</span>
            </div>
            <div className="gunn-contact-say-g-day__button-container">
              <CustomButton
                label="Book Call Back"
                action={handleBookCallBack}
              />
              <CustomButton label="Signup" action={handleBookCallBack} />
            </div>
          </div>
        </div>
      </div>
      <div className="gunn-contact-slogan">
        <div className="gunn-contact-slogan__container">
          <div className="gunn-contact-slogan__title">
            Ready when you are<span>.</span>
          </div>
          <div className="gunn-contact-slogan__image">
            <img src={ClintPhoto} alt="" />
          </div>
          <div className="gunn-contact-slogan__slogan">
            <div>We do what others can&apos;t.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GunnContact;
