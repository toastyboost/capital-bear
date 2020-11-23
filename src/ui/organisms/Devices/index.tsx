import * as React from "react";
import styled from "styled-components";

import { Title, Text, Button, Icon } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import browsers from "~/static/browsers.svg";

import desktop from "~/static/device-01.png";
import tablet from "~/static/device-02.png";
import mobile from "~/static/device-03.png";

export const Devices = () => {
  return (
    <Wrap>
      <Container>
        <DevicesBlocks>
          <Device>
            <DeviceImage src={desktop} alt="" />
          </Device>
          <Device>
            <Block>
              <BlockIcon name="phone" />
              <BlockTitle level={2}>Sleek performance on any device</BlockTitle>
              <BlockDescription level={1}>
                Trade on Web or Mobile and switch between the two without a hitch
              </BlockDescription>
              <Browsers src={browsers} alt="" />
              <Cta href="/" type="ghost">
                Open free account
              </Cta>
            </Block>
          </Device>
          <Device>
            <DeviceImage src={tablet} alt="" />
          </Device>
          <Device>
            <DeviceImage src={mobile} alt="" />
          </Device>
        </DevicesBlocks>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #f9f9fb;
  padding: 60px 0;
`;

const Browsers = styled.img`
  margin-top: 30px;
  margin-bottom: 10px;
  max-width: 225px;
  height: auto;
`;

const DevicesBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`;

const Device = styled.div`
  padding: 15px;

  ${MEDIA.PHONE`
    width: 100%;
  `};

  ${MEDIA.DESKTOP`
    width: 50%;
  `};
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-left: 30px;
`;

const BlockIcon = styled(Icon)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-bottom: 15px;
`;

const BlockTitle = styled(Title)`
  width: 100%;
  padding-bottom: 15px;
`;

const BlockDescription = styled(Text)`
  width: 100%;
  color: #27262d;

  ${MEDIA.DESKTOP`
    max-width: 600px;
  `};
`;

const Cta = styled(Button)`
  display: inline-block;
  margin: 0;
  width: min-content;
`;

const DeviceImage = styled.img`
  width: 100%;
  height: auto;
`;
