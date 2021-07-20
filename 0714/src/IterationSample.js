import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([])
    const [nextId, setNextId] = useState(0);
    const [inputText, setInputText] = useState('');

    const onChange = e => {
        setInputText(e.target.value)
    }
    const onClick = () => {
        const nameList = names.concat({
            id: nextId,
            text: inputText
        })
        setNames(nameList);
        setNextId(nextId + 1);
        setInputText('');
    }
    const onDelete = id => {
        const deleteList = names.filter(name => name.id !== id);
        setNames(deleteList);
    }

    const nameList = names.map(names => <li key={names.id} onDoubleClick={() => onDelete(names.id)}>{names.text}</li>)
    return (
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;