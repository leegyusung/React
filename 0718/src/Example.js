import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';

const Example = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ id: '', name: '' });
    const [data, setData] = useState({
        array: [],
        uselessValue: null
    });

    // const onChange = useCallback(
    //     e => {
    //         const { name, value } = e.target;
    //         setForm({
    //             ...form,
    //             [name]: [value]
    //         })
    //     }
    //     , [form]
    // );
    const onChange = useCallback(
        e => {
            const { name, value } = e.target;
            setForm(
                produce(form, draft => {
                    draft[name] = value;
                })
            )
        }, [form]
    )
    // const onSubmit = useCallback(
    //     () => {
    //         if (form.id === "" || form.name === "") return;
    //         const info = {
    //             index: nextId.current,
    //             id: form.id,
    //             name: form.name
    //         }
    //         setData({
    //             ...data,
    //             array: data.array.concat(info)
    //         })
    //         setForm({
    //             id: '',
    //             name: ''
    //         })
    //         nextId.current += 1;
    //     }
    //     , [data, form]
    // )
    const onSubmit = useCallback(
        () => {
            const info = {
                index: nextId.current,
                id: form.id,
                name: form.name
            }
            setData(
                produce(data, draft => {
                    draft.array.push(info);
                })
            )
            nextId.current += 1;
        }, [data, form]
    )


    const onRemove = useCallback(
        index => {
            setData({
                ...data,
                array: data.array.filter(data => index !== data.index)
            })
        }
        , [data]
    )

    return (
        <>
            <input name="id" placeholder="아이디" value={form.id} onChange={onChange}></input>
            <input name="name" placeholder="이름" value={form.name} onChange={onChange}></input>
            <button onClick={onSubmit}>등록</button>
            <div>
                <ui>
                    {data.array.map(data => <li key={data.index} onClick={() => onRemove(data.index)}>{data.id} ({data.name})</li>)}
                </ui>
            </div>
        </>
    );
};

export default Example;