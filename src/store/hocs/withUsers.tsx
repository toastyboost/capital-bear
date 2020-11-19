import * as React from "react";
import { useSelector } from "react-redux";

import { getAllUsers, selectUsers } from "~/store/ducks/users/all";

const withUsers = (ChildComponent: React.FC) => {
  return (props: any) => {
    const connectRedux = {
      getAllUsers,
      usersData: useSelector(selectUsers),
    };
    return <ChildComponent {...connectRedux} {...props} />;
  };
};

export { withUsers };
