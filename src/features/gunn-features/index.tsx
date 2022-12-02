import React from "react";
import {
  BankIcon,
  GunnBackground,
  GunnFeatureImage,
  IncomeIcon,
  LoanBookIcon,
  PropertyIcon,
  ReferralIcon,
  ReportIcon,
  TagIcon,
  WealthView,
} from "../../assets/images";
import CustomButton from "../../components/custom-button";
import LaunchDemoButton from "../../components/launch-demo-button";
import "./gunn-features.scss";

type GunnFeaturesProps = {
  title: string;
  icon: string;
  content: string;
};

const GunnFeatureItem = ({ title, icon, content }: GunnFeaturesProps) => (
  <div className="gunn-features-content-item">
    <div className="gunn-features-content-item__icon">
      <img src={icon} alt="" />
    </div>
    <div className="gunn-features-content-item__content">
      <div className="gunn-features-content-item__heading">{title}</div>
      <div className="gunn-features-content-item__description">{content}</div>
    </div>
  </div>
);

const gunnFeatures = [
  {
    icon: ReferralIcon,
    title: "Client Referral Feature",
    content: "Put word of mouth on steroids with our inbuilt referral feature.",
  },
  {
    icon: LoanBookIcon,
    title: "Loan Book Management",
    content: "Identify at risk clients and service them before churn.",
  },
  {
    icon: ReportIcon,
    title: "Automated Client Reports",
    content:
      "Automated smart money reports sent to your client with your brand.",
  },
  {
    icon: IncomeIcon,
    title: "Income & Expenses",
    content: "Gain insights into your expenses and income.",
  },
  {
    icon: TagIcon,
    title: "Whitelabel Refferals",
    content: "Provide  a white label solution to your referral network.",
  },
  {
    icon: BankIcon,
    title: "Run Instant Scenarios",
    content:
      "Run client scenarios on the fly with live data, no more payslips!",
  },
  {
    icon: PropertyIcon,
    title: "Property Tracking",
    content: "Track your property performance and it’s cashflow position.",
  },
  {
    icon: WealthView,
    title: "Whole Wealth View",
    content:
      "Track your shares and super and keep track of payments and trades.",
  },
];

const GunnFeatures = () => (
  <div className="gunn-features">
    <div className="gunn-features-content">
      <div className="gunn-features-content__wrapper">
        <div className="gunn-features-content__title">
          Jamm Packed With Features<span>.</span>
        </div>
        <div className="gunn-features-content__features">
          {gunnFeatures.map((item) => (
            <GunnFeatureItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              content={item.content}
            />
          ))}
        </div>
        <div className="gunn-features-content__button-container">
          <CustomButton title="Signup" outline />
          <LaunchDemoButton />
        </div>
        <div className="gunn-features-content__gunn-icon">
          <img src={GunnBackground} alt="" />
        </div>
      </div>
    </div>
    <div className="gunn-features-image">
      <img src={GunnFeatureImage} alt="" />
    </div>
  </div>
);

export default GunnFeatures;
