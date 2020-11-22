import * as React from "react";

import { Layout } from "~/ui/templates";
import { Hero, Steps, Toolbox, TrendingAssets, Devices, About } from "~/ui/organisms";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Steps />
      <Toolbox />
      <TrendingAssets />
      <Devices />
      <About />
    </Layout>
  );
};

export default Index;
