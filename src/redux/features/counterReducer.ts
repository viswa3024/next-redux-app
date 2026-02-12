// STATE
const initialState = { value: 0 };

// ACTION TYPES
const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";
export const INCREMENT_BY_AMOUNT = "counter/incrementByAmount";
export const RESET = "COUNTER_RESET";

// REDUCER
export default function counterReducer(state = initialState, action: any) {

  console.log("action: ", action)
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };

    case DECREMENT:
      return { ...state, value: state.value - 1 };

    case INCREMENT_BY_AMOUNT:
      return { ...state, value: state.value + action.payload };

    case RESET:
      return { ...state, value: 0 };

    default:
      return state;
  }
}

// ACTION CREATORS
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementByAmount = (amount: number) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount
});

export const reset = () => ({ type: RESET });