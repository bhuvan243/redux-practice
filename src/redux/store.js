import { createStore } from "redux";  
import CounterReducer from "./reducers/CounterReducer";


const store = createStore(CounterReducer)  // 1

console.log(store) 

export default store