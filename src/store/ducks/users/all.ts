import { createAction, handleActions, Action } from "redux-actions";
import { fetchUsers } from "~/store/api";

// SYNC ACTIONS

export const setAllUsers = createAction<Action<any>>("setAllUsers");

// ASYNC ACTIONS

export const getAllUsers = () => async (dispatch: any) => {
  const response = await fetchUsers();
  const result = await response.json();

  dispatch(setAllUsers({ ...result }));
};

const initialState = {};

export default handleActions(
  {
    [setAllUsers as any]: (state, { payload }) => {
      const { data }: { data?: any } = payload;

      return {
        data,
      };
    },
  },
  initialState
);

export const selectUsers = (state: any) => state.users.all;
