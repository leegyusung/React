import React from 'react';
import { useState } from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
    const [data, setData] = useState('');
    const [list, setList] = useState([]);
    const onChangeInput = e => {
        setData(e.target.value)
    }
    const onInsert = () => {
        setList(list.concat(data));
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <hr />
            <div>
                <input type="text" placeholder="데이터 입력해주세요" value={data} onChange={onChangeInput}></input>
                <button onClick={onInsert}>등록</button>
                <h2>{list}</h2>
            </div>
        </div>
    );
};

export default Counter;