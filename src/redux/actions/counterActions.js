import { INCREASE, DECREASE, RESET } from "./actionTypes";

// define the functions to do the operations
const increment = (value=1) => ({
  type: INCREASE,
  value: value
});

const decrement = (value=1) => ({
  type: DECREASE,
  value: value
});
const reset = () => ({
    type: RESET,
    value: 0
});

export { increment, decrement, reset };