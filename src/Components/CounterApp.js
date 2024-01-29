import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/actions/counterActions";

const CounterApp = () => {
    const count = useSelector(state => state)
    const dispatch = useDispatch()

    function increaseCount(){
        dispatch(increment(10));
    }
    function decreaseCount(){
        dispatch(decrement(5));
    }
    function resetCount(){
        dispatch(reset());
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}

export default CounterApp;