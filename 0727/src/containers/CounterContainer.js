import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../componets/Counter';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}></Counter>
    );
};

export default CounterContainer;