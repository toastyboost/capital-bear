import * as React from "react";

import { GenericLayout } from "~/ui/templates";
import {
  Hero,
  Steps,
  Toolbox,
  TrendingAssets,
  Devices,
  About,
} from "~/ui/organisms";

const Index = () => {
  return (
    <GenericLayout>
      <Hero />
      <Steps />
      <Toolbox />
      <TrendingAssets />
      <Devices />
      <About />
    </GenericLayout>
  );
};

export default Index;
