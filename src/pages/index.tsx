import * as React from "react";

import { Layout } from "~/ui/templates";
import { Hero, Steps, Toolbox, TrendingAssets } from "~/ui/organisms";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Steps />
      <Toolbox />
      <TrendingAssets />
    </Layout>
  );
};

export default Index;
