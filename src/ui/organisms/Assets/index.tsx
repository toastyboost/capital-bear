import * as React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Text } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
import { MEDIA } from "~/libs/media";
import { Container } from "~/ui/atoms";

import plusWhite from "~/static/plus-white.svg";
import plusBlack from "~/static/plus-black.svg";
import payments from "~/static/payments.svg";

import { fetchAssets } from "../../../api";

const sliderSettings = {
  infinite: true,
  variableWidth: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const TrendingAssets = () => {
  const [assets, setAssets] = React.useState<any>(null);
  const [activeTab, setActiveTab] = React.useState<any>("Forex");

  React.useEffect(() => {
    fetchAssets().then(setAssets);
  }, []);

  return (
    <>
      <Wrap>
        <Section icon="cube" title="Trending assets">
          {assets && (
            <Tabs>
              {Object.keys(assets).map((tab) => (
                <Tab
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  isActive={tab === activeTab}
                >
                  {tab} <span> ‧ {assets[tab].length}</span>
                </Tab>
              ))}
            </Tabs>
          )}

          {assets && (
            <Slider {...sliderSettings}>
              {assets[activeTab].map((asset: any) => (
                <AssetCard data={asset} key={asset.id} />
              ))}
            </Slider>
          )}
          <Desclimer>
            Not investment advice.
            <br />
            Past performance is not an indication of future results.
          </Desclimer>
        </Section>
      </Wrap>
      <Payments>
        <PaymentsLogos src={payments} alt=" " />
      </Payments>
    </>
  );
};

export const AssetCard: React.FC<any> = ({ data }) => {
  const { price, change, logo, name, ticker } = data;

  return (
    <Card>
      <Head>
        <Price>${price}</Price>
        <Change>
          <span>{change}%</span>
        </Change>
      </Head>
      <Logo>
        <img src={logo} alt=" " />
      </Logo>
      <Content>
        <Name>{name}</Name>
        <Ticker level={3}>{ticker}</Ticker>
        <Cta href="/link-to-asset">
          <span>Open asset</span>
        </Cta>
      </Content>
    </Card>
  );
};

const Wrap = styled(Container)`
  margin-bottom: 46px;
  max-width: 1096px;
  overflow: hidden;

  ${MEDIA.PHONE`
    padding: 0 0 0 24px;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 24px;
  `};

  .section-header {
    ${MEDIA.PHONE`
      padding: 0 24px;
    `}

    ${MEDIA.DESKTOP`
      padding: 0;
    `};
  }

  .slick-slider {
    width: 100%;
  }

  .slick-next {
    ${MEDIA.PHONE`
      right: 8px;
    `}

    ${MEDIA.DESKTOP`
      right: -8px;
    `};
  }

  .slick-list {
    min-height: 343px;
  }

  .slick-slide {
    margin: 0 8px;
  }
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ebebeb;
  overflow: scroll;
  flex-direction: row-reverse;

  ${MEDIA.PHONE`
    margin: -20px 0 40px 0;
    justify-content: flex-end;
  `}

  ${MEDIA.TABLET`
    margin: -20px auto 40px auto;
    justify-content: center;
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
  height: 100%;
  display: flex;
  flex-direction: column;

  ${MEDIA.PHONE`
    width: 246px;
    padding: 22px;
  `}

  ${MEDIA.TABLET`
    width: 234px;
  `};

  ${MEDIA.DESKTOP`
    width: 246px;
    padding: 33px;
  `};
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

const Cta = styled.a`
  line-height: 38px;
  padding: 0 18px;
  font-size: 14px;
  font-family: "Manrope";
  font-weight: 600;
  background-color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  display: block;
  margin: 20px auto 0 auto;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
  transition: 0.2s;
  position: relative;
  box-shadow: 0 7px 14px -4px rgba(120, 110, 144, 0.13);

  span {
    opacity: 0;
  }

  &:hover {
    width: 100%;
    background-color: var(--primary);
    span {
      opacity: 1;
    }

    &:before {
      background-image: url(${plusWhite});
    }
  }

  &:before {
    content: "";
    width: 14px;
    height: 14px;
    display: inline-block;
    background-image: url(${plusBlack});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    left: -5px;
    bottom: -2px;
  }
`;

const Desclimer = styled.div`
  text-align: center;
  color: rgb(129, 129, 129);
  margin: 36px auto 0 auto;

  ${MEDIA.PHONE`
    max-width: 210px;
    font-size: 12px;
  `}

  ${MEDIA.SMARTPHONE`
    max-width: 100%;
    font-size: 14px;
  `};
`;

const Payments = styled.div`
  border-top: 1px solid rgba(228, 221, 244, 0.5);
  padding: 60px 0 70px 0;
  text-align: center;

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
  `};
`;

const PaymentsLogos = styled.img``;
