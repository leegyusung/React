import React, { useReducer, useState } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    // const [counter, setCounter] = useState(0);

    // const onAdd = () => {
    //     setCounter(counter + 1);
    // }
    // const onMinus = () => {
    //     setCounter(counter - 1);
    // }
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    return (
        <div>
            <p>
                현재 카운터 값은 {state.value} 입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>

        // <div>
        //     <h1>현재 카운터 {counter} 값은 입니다</h1>
        //     <button onClick={onAdd}>+1</button>
        //     <button onClick={onMinus}>-1</button>
        // </div>
    );
};

export default Counter;