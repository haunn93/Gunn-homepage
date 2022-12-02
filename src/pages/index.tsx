import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import BeABroker from "../features/be-a-broker";
import GunnAdvantage from "../features/gunn-advangate";
import GunnFeatures from "../features/gunn-features";
import Devices from "../features/devices";
import GunnContact from "../features/gunn-contact";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <BeABroker />
    <GunnAdvantage />
    <GunnFeatures />
    <Devices />
    <GunnContact />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Gunn</title>;
