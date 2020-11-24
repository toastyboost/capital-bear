import * as React from "react";
import styled from "styled-components";
import { Text, Link } from "~/ui/atoms";

import check from "~/static/check.svg";
import checkWhite from "~/static/check-white.svg";

export const GDPR: React.FC<any> = ({ className }) => (
  <Wrap className={className}>
    <GDPRText level={3}>
      We use cookies to understand how you use our site and to improve your
      experience. By clicking “Got it” or by continuing to use our website you
      agree to their use. <Link href="/gdpr">More Info</Link>
    </GDPRText>
    <Got>
      Got it
      <GotIcon />
    </Got>
  </Wrap>
);

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 82px;
  background-color: #f9f9fb;
  padding: 20px 70px;
`;

const GDPRText = styled(Text)`
  max-width: 730px;

  a {
    color: var(--primary);
    font-size: 16px;
  }
`;

const GotIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50px;
  border: 1px solid #e1dee7;
  margin-left: 16px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border-color: var(--primary);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 13px;
    height: 13px;
    background-image: url(${check});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:active {
    background-color: var(--primary);

    &:before {
      background-image: url(${checkWhite});
    }
  }
`;

const Got = styled.div`
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
