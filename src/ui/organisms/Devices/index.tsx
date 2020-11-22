import * as React from "react";
import styled from "styled-components";

import { Title, Text, Button } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import browsers from "~/static/browsers.svg";

// import tablet from "~/static/device_tablet.svg";
// import desktop from "~/static/device_desktop.svg";

const devices = [
  // {
  //   imageSrc: tablet,
  // },
  // {
  //   imageSrc: desktop,
  // },
];

export const Devices = () => {
  return (
    <Wrap>
      <Section
        icon="phone"
        title="Sleek performance on any device"
        description="Trade on Web or Mobile and switch between the two without a hitch"
      >
        <Browsers src={browsers} />
        {/* {devices.map(({ imageSrc }, key) => (
          <Device key={key}>
            <DeviceImage src={imageSrc} alt="" />
          </Device>
        ))} */}
        <Cta href="/to-open-account">Open free account</Cta>
      </Section>
    </Wrap>
  );
};

const Wrap = styled(Container)`
  background-color: #f9f9fb;
  padding: 0;

  .title {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Browsers = styled.img`
  display: block;
  margin: -30px auto 30px auto;
`;

const Device = styled.div`
  margin-bottom: 15px;
  position: relative;
  left: -1px;
  overflow: hidden;
`;

const DeviceImage = styled.img``;

const Cta = styled(Button)`
  margin: 0 auto;
`;
