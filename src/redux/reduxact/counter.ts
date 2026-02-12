import { createAction, createReducer } from "redux-act";

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementByAmount = createAction<number>("counter/incrementByAmount");
export const reset = createAction("counter/reset");

const initialState = {
  value: 0
};

export const counterReducer = createReducer(
  {
    [increment.toString()]: (state) => ({
      ...state,
      value: state.value + 1
    }),

    [decrement.toString()]: (state) => ({
      ...state,
      value: state.value - 1
    }),

    [incrementByAmount.toString()]: (state, payload) => ({
      ...state,
      value: state.value + payload
    }),

    [reset.toString()]: (state) => ({
      ...state,
      value: 0
    })
  },
  initialState
);