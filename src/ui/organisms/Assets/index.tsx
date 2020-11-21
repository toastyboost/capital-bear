import * as React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Title, Text, Button } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import plus from "~/static/plus.svg";
import { fetchAssets } from "../../../api";

const sliderSettings = {
  arrows: false,
  infinite: false,
  variableWidth: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1.4,
  slidesToScroll: 1,
};

const tabs = ["forex", "stocks", "crypto", "commodities"];

export const TrendingAssets = () => {
  const [assets, setAssets] = React.useState<any>({
    forex: [],
    stocks: [],
    crypto: [],
    commodities: [],
  });

  const [activeTab, setActiveTab] = React.useState<any>("forex");

  React.useEffect(() => {
    fetchAssets().then((data) => setAssets({ ...assets, forex: data }));
  }, []);

  console.log(activeTab, assets, assets[activeTab]);
  return (
    <Wrap>
      <Section icon="cube" title="Trending assets">
        <Tabs>
          {tabs.map((tab) => (
            <Tab key={tab} onClick={() => setActiveTab(tab)} isActive={tab === activeTab}>
              {tab} <span>‧ {assets[tab].length}</span>
            </Tab>
          ))}
        </Tabs>
        <Cards data={assets[activeTab]} />
      </Section>
    </Wrap>
  );
};

const Cards: React.FC<any> = ({ data }) => {
  return (
    <Slider {...sliderSettings}>
      {data.map((asset: any, key: any) => (
        <Card key={key}>
          <Head>
            <Name>${asset.price.toFixed(2)}</Name>
            <Change>
              <span>{asset.change.toFixed(2)}%</span>
            </Change>
          </Head>
          <Logo>
            <img src={asset.logo} alt=" " />
          </Logo>
          <Content>
            <Title level={3}>{asset.name}</Title>
            <Ticker level={3}>{asset.ticker}</Ticker>
            <AssetCta>Open asset</AssetCta>
          </Content>
        </Card>
      ))}
    </Slider>
  );
};
const Wrap = styled(Container)`
  overflow: hidden;
  min-height: 403px;
  .slick-slider {
    margin-left: -14px;
    min-height: 403px;
  }

  .slick-slide {
    padding: 0 14px;
  }
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid #ebebeb;
`;

const Tab = styled.div<any>`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #323037;
  text-transform: capitalize;
  padding: 10px 18px;
  border-bottom: 3px solid;
  border-bottom-color: ${(p) => (p.isActive ? "#FF754C" : "transparent")};
  white-space: nowrap;
  margin-bottom: -1px;

  span {
    opacity: 0.5;
  }
`;

const Card = styled.div`
  background-color: #f9f9fb;
  border-radius: 5px;
  padding: 22px;
  min-width: 226px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(17, 20, 45);
  font-size: 16px;
  line-height: 0;
  font-weight: 600;
  padding-bottom: 30px;
`;

const Name = styled.div``;

const Change = styled.div`
  background: #f3f3f7;
  border-radius: 15px;
  padding: 0 14px;
  line-height: 28px;
  font-size: 16px;

  span {
    position: relative;
    bottom: -2px;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 10px 20px -5px rgba(120, 110, 144, 0.13);
  border-radius: 10px;
  margin: 0 auto;
  display: flex;

  img {
    height: 54px;
    width: 54px;
    margin: auto;
  }
`;

const Content = styled.div`
  padding-top: 26px;
  text-align: center;
`;

const Ticker = styled(Text)`
  padding-top: 8px;
  color: rgb(188, 180, 195);
`;

const AssetCta = styled(Button)`
  line-height: 38px;
  font-size: 14px;
  margin-top: 20px;
  padding: 0 25px 0 25px;

  &:after {
    display: none;
  }

  /* &:before {
    content: "";
    width: 14px;
    height: 14px;
    display: inline-block;
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 15px;
  } */
`;
