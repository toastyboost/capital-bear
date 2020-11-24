import * as React from "react";
import styled from "styled-components";

import { InsideHeader, InsideFooter, Header, Footer } from "~/ui/organisms";
import { GlobalStyles } from "~/styles/defaults";

export const GenericLayout: React.FC<any> = ({
  children,
  isInside = false,
}) => (
  <>
    <GlobalStyles />
    <>
      {isInside ? <InsideHeader /> : <Header />}
      <Main>{children}</Main>
      {isInside ? <InsideFooter /> : <Footer />}
    </>
  </>
);

const Main = styled.main`
  padding-bottom: 40px;
`;
