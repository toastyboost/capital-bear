import * as React from "react";

import { StyledBurgerContainer, StyledBurgerBox, StyledBurgerInner } from "./styles";

type BurgerProps = {
  className?: string;
  isVisible: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const Burger: React.FC<BurgerProps> = ({ className, isVisible, onClick }) => {
  return (
    <StyledBurgerContainer className={className} onClick={onClick}>
      <StyledBurgerBox>
        <StyledBurgerInner isActive={isVisible} />
      </StyledBurgerBox>
    </StyledBurgerContainer>
  );
};
