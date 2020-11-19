import * as React from "react";

import { Translate } from "~/libs/translate";

import { TextContainer, Wrapper, Title, Content, TextMerriweather, TextRoboto, Scrollable } from "./styles";

export const Fonts = () => {
  return (
    <TextContainer>
      <Wrapper>
        <Content>
          <TextMerriweather>
            <Title as="h2">
              <Translate id="hello" /> Merriweather
            </Title>
            While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing
            letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly
            found in humanist and serif types.
          </TextMerriweather>
          <TextRoboto>
            <Title as="h2">
              <Translate id="hello" /> Roboto
            </Title>
            Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same
            time, the font features friendly and open curves.
          </TextRoboto>
        </Content>
        <Scrollable />
      </Wrapper>
    </TextContainer>
  );
};
