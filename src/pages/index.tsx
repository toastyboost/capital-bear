import * as React from "react";

import { Layout } from "~/ui/templates";

import { Fonts, Async, Seo } from "~/ui/organisms";

const seoProps = {
  title: "Main",
  desc: "Main page",
};

const IndexPage: React.FC = () => {
  return (
    <>
      <Seo {...seoProps} />
      <Layout>
        <Async />
        <Fonts />
      </Layout>
    </>
  );
};

export default IndexPage;
