import React, { useEffect } from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";

import { Loader } from "~/ui/atoms";
import { withUsers } from "~/store/hocs";

import { AsyncContainer, Wrapper, Title, Content, ListItem } from "./styles";

type BlockProps = {
  getAllUsers: any;
  usersData: {
    data: { email: string }[];
  };
}

const Block: React.FC<BlockProps> = ({ getAllUsers, usersData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { data } = usersData;

  return (
    <AsyncContainer>
      <Wrapper>
        <Content>
          <Title as="h1">Async Data</Title>
          {data ? (
            data.map(({ email }, key) => (
              <ListItem key={key}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                {email}
              </ListItem>
            ))
          ) : (
              <Loader />
            )}
        </Content>
      </Wrapper>
    </AsyncContainer>
  );
};

export const Async = compose(withUsers)(Block as any);
