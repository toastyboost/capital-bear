import * as React from "react";

import styled from "styled-components";
import { Container } from "~/styles";
import { Logo } from "~/ui/atoms";

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
        <FooterLogo type="white" />
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
        <Email href="to:support@capitalbear.com">support@capitalbear.com</Email>
        <Copy>
          Digital Smart Ltd. Registration No. 25959 BC 2020. Hinds Building, Kingstown, St. Vincent
          and Grenadines
        </Copy>
        <Rights>© All rights reserved.</Rights>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.footer`
  padding: 60px 0;
  background-color: rgb(40, 49, 72);
  text-align: center;
`;

const FooterLogo = styled(Logo)`
  img {
    max-width: 144px;
    height: 22px;
    margin-bottom: 45px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const Title = styled.div`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Link = styled.a`
  width: 100%;
  margin-bottom: 6px;
  font-size: 15px;
  color: #f9f9fb;
  opacity: 0.6;
  max-width: 175px;
  margin: 0 auto 4px auto;
`;

const Email = styled.a`
  color: rgb(255, 255, 255);
  margin-bottom: 40px;
  display: block;
`;

const Copy = styled.div`
  color: #f9f9fb;
  opacity: 0.6;
  margin-bottom: 20px;
`;

const Rights = styled.div`
  color: #f9f9fb;
  opacity: 0.6;
`;
