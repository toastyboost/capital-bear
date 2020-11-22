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
  infinite: false,
  variableWidth: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
  ],
};

const tabs = ["forex", "stocks", "crypto", "commodities", "etf"];

export const TrendingAssets = () => {
  const [assets, setAssets] = React.useState<any>({
    forex: [],
    stocks: [],
    crypto: [],
    commodities: [],
    etf: [],
  });

  const [activeTab, setActiveTab] = React.useState<any>("forex");

  React.useEffect(() => {
    fetchAssets().then((data) => setAssets({ ...assets, forex: data }));
  }, []);

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
        <Slider {...sliderSettings}>
          {assets[activeTab].map((asset: any) => (
            <AssetCard data={asset} key={asset.id} />
          ))}
        </Slider>
        <Desclimer>
          Not investment advice.
          <br />
          Past performance is not an indication of future results.
        </Desclimer>
      </Section>
    </Wrap>
  );
};

export const AssetCard: React.FC<any> = ({ data }) => {
  const { price, change, logo, name, ticker } = data;

  return (
    <Card>
      <Head>
        <Price>${price.toFixed(2)}</Price>
        <Change>
          <span>{change.toFixed(2)}%</span>
        </Change>
      </Head>
      <Logo>
        <img src={logo} alt=" " />
      </Logo>
      <Content>
        <Name>{name}</Name>
        <Ticker level={3}>{ticker}</Ticker>
        <Cta href="/link-to-asset">Open asset</Cta>
      </Content>
    </Card>
  );
};

const Wrap = styled(Container)`
  margin-bottom: 46px;
  max-width: 1096px;
  overflow: hidden;

  .section-header {
    ${MEDIA.PHONE`
      padding: 0 24px;
    `}

    ${MEDIA.DESKTOP`
      padding: 0;
    `};
  }

  ${MEDIA.PHONE`
    padding: 0;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 24px;
  `};

  .slick-slider {
    width: 100%;

    ${MEDIA.PHONE`
      transform: translateX(24px);
    `}

    ${MEDIA.DESKTOP`
    transform: translateX(0);
    
    `};
  }

  .slick-list {
    min-height: 347px;
  }

  .slick-slide {
    margin: 0 8px;
  }

  .section-header {
    justify-content: flex-start;
    text-align: left;
  }
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ebebeb;
  overflow: scroll;

  ${MEDIA.PHONE`
    margin: -20px 0 40px 24px;
  `}

  ${MEDIA.DESKTOP`
    margin-top: -20px;
    margin-bottom: 40px;
    margin-left: 0;
  `};
`;

const Tab = styled.div<any>`
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: #323037;
  text-transform: capitalize;
  padding: 7px 20px 12px 20px;
  border-bottom: 3px solid;
  border-bottom-color: ${(p) => (p.isActive ? "#FF754C" : "transparent")};
  white-space: nowrap;
  margin-bottom: -1px;
  transition: 0.2s;

  &:hover {
    color: #000;
  }

  span {
    opacity: 0.5;
  }
`;

const Card = styled.div`
  background-color: #f9f9fb;
  border-radius: 5px;
  padding: 22px;
  width: 248px;
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

const Price = styled.div``;

const Change = styled.div`
  background: #f3f3f7;
  border-radius: 15px;
  padding: 0 14px;
  line-height: 28px;
  font-size: 16px;
  margin-top: -1px;

  span {
    position: relative;
    bottom: -2px;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.03), 0 1px 1px 1px rgba(0, 0, 0, 0.03),
    0 0 1px 0 rgba(0, 0, 0, 0.03);
  border-radius: 32px;
  margin: 0 auto;
  display: flex;
  background-color: #fff;

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

const Name = styled.p`
  font-size: 21px;
  line-height: 28px;
  color: #11142d;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Ticker = styled(Text)`
  padding-top: 8px;
  color: rgb(188, 180, 195);
`;

const Cta = styled(Button)`
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

const Desclimer = styled.div`
  text-align: center;
  color: rgb(129, 129, 129);
  margin: 36px auto 0 auto;

  ${MEDIA.PHONE`
    max-width: 210px;
    font-size: 12px;
  `}

  ${MEDIA.DESKTOP`
    max-width: 100%;
    font-size: 14px;
  `};
`;
