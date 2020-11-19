import * as React from "react";

import { LoadContainer, Load, LoadCut, LoadShape } from "./styles";

export const Loader = () => (
  <LoadContainer>
    <Load>
      <LoadCut>
        <LoadShape />
      </LoadCut>
    </Load>
  </LoadContainer>
);
