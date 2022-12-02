import React from "react";
import { AllDevices } from "../../assets/images";
import LaunchDemoButton from "../../components/launch-demo-button";
import "./devices.scss";

const Devices = () => (
  <div className="devices-section">
    <div className="devices-section__image">
      <img src={AllDevices} alt="" />
    </div>
    <div className="devices-section__device-list">
      Desktop<span>,</span> iPad<span>,</span> Native IOS <span>&</span> Android
      <span>.</span>
    </div>
    <div className="devices-section__slogan">
      <div>
        Make your clients a Gunn<span>.</span> with their money <br />
        and service them like never before!
      </div>
      <LaunchDemoButton />
    </div>
  </div>
);

export default Devices;
