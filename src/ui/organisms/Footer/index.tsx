import * as React from "react";

import { Container } from "./styles";

const todayYear = new Date().getFullYear();

export const Footer = () => {
  return <Container id="footer">© 2013 – {todayYear}</Container>;
};
