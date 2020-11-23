import * as React from "react";

import styled from "styled-components";
import { Container } from "~/styles";
import { Logo } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";

const regulationLinks = [
  {
    title: "Terms & Conditions",
    href: "",
  },
  {
    title: "General Fees",
    href: "",
  },
];

const policiesLinks = [
  {
    title: "Withdrawal Policy",
    href: "",
  },
  {
    title: "Payment Policy",
    href: "",
  },
  {
    title: "Privacy Policy",
    href: "",
  },
  {
    title: "Order Execution Policy",
    href: "",
  },
];

const privaciesLinks = [
  {
    title: "Conflict of Interest Policy",
    href: "",
  },
  {
    title: "Code of Conduct",
    href: "",
  },
  {
    title: "Anti Money Laundering (AML) and Know Your Customer (KYC) Policy",
    href: "",
  },
];

export const Footer = () => {
  return (
    <Wrap>
      <Container>
        <Buttons>
          <FooterLogo type="white" />
          {/* apps here */}
        </Buttons>
        <LinksWrap>
          <Links>
            <Title>Regulation</Title>
            {regulationLinks.map(({ href, title }, key) => (
              <Link key={key} href={href}>
                {title}
              </Link>
            ))}
          </Links>
          <Links>
            <Title>Policies</Title>
            {policiesLinks.map(({ href, title }, key) => (
              <Link key={key} href={href}>
                {title}
              </Link>
            ))}
          </Links>
          <Links>
            <Title>Privacies</Title>
            {privaciesLinks.map(({ href, title }, key) => (
              <Link key={key} href={href}>
                {title}
              </Link>
            ))}
          </Links>
        </LinksWrap>
        <Email href="to:support@capitalbear.com">support@capitalbear.com</Email>
        <CopyRights>
          <Copy>
            Digital Smart Ltd. Registration No.
            <br />
            25959 BC 2020. Hinds Building, Kingstown, St.
            <br />
            Vincent and Grenadines
          </Copy>
          <Rights>© All rights reserved.</Rights>
        </CopyRights>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.footer`
  font-family: "Manrope";
  padding: 60px 0;
  background-color: rgb(40, 49, 72);

  ${MEDIA.PHONE`
    text-align: center; 
  `}

  ${MEDIA.DESKTOP`
    text-align: left;
  `};
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 55px;

  ${MEDIA.PHONE`
    justify-content: center;
  `}

  ${MEDIA.DESKTOP`
    justify-content: space-between;
  `};
`;

const FooterLogo = styled(Logo)`
  img {
    max-width: 144px;
    height: 22px;
  }
`;

const LinksWrap = styled.div`
  ${MEDIA.DESKTOP`
    display: flex;
  `};
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  ${MEDIA.DESKTOP`
    margin-right: 50px;
  `};
`;

const Title = styled.div`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Link = styled.a`
  width: 100%;
  font-size: 14px;
  color: #f9f9fb;
  opacity: 0.7;
  max-width: 180px;
  font-weight: 500;
  transition: 0.1s;

  &:hover {
    color: #6939cf;
    opacity: 1;
  }

  ${MEDIA.PHONE`
    margin: 0 auto 6px auto;
  `}

  ${MEDIA.DESKTOP`
    margin: 0 0 12px 0;
  `};
`;

const Email = styled.a`
  color: rgb(255, 255, 255);

  &:hover {
    color: var(--primary);
  }

  ${MEDIA.PHONE`
    margin-bottom: 40px;
    display: block;
  `}

  ${MEDIA.DESKTOP`
    margin-bottom: 60px;
    display: inline-block;
  `};
`;

const CopyRights = styled.div`
  ${MEDIA.DESKTOP`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `};
`;

const Copy = styled.div`
  color: #f9f9fb;
  opacity: 0.6;

  ${MEDIA.PHONE`
    margin-bottom: 20px;
  `}

  ${MEDIA.DESKTOP`
    margin-bottom: 0;
  `};
`;

const Rights = styled.div`
  color: #f9f9fb;
  opacity: 0.6;
`;
