import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = list => {
    if (list.length === 0) return 0;
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
}

const Average = () => {
    const [number, setNumber] = useState('');
    const [list, setList] = useState([]);
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    const onInsert = useCallback(() => {
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}></input>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : {avg}</b>
            </div>
        </div>
    );
};

export default Average;