import * as React from "react";

import { Logo, Link } from "~/ui/atoms";
import { Menu, Popup } from "~/ui/molecules";
import { HeaderContainer, Wrapper } from "./styles";

const headerData = [
  {
    slug: "#footer",
    caption: "Anchor",
  },
  {
    slug: "404",
    caption: "404 page",
  },
];

const Header = () => {
  const [isHidden, setVisibility] = React.useState(true);

  return (
    <HeaderContainer>
      <Wrapper>
        <Logo />
        <Menu data={headerData} />
        <Link onClick={() => setVisibility(!isHidden)}>Popup Window</Link>
      </Wrapper>
      <Popup isOpen={isHidden} toggle={setVisibility}>
        Popup Content
      </Popup>
    </HeaderContainer>
  );
};

export { Header };
