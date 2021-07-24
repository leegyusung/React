import React, { useEffect, useState } from 'react';
import Newitem from './newItem';
import axios from 'axios';
import styled from 'styled-components';


const NewsItemBlock = styled.div`
 box-sizing:border-box;
 padding-bottom: 3rem;
 width: 768px;
 margin: 0 auto;
 margin-top: 2rem;
 @media screen and (max-width:768px){
     width: 100%;
     padding-left: 1rem;
     padding-right: 1rem;
 }
`;

const Newitems = ({ category }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;

                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3178b9e05d9e4cb18f2e48dd90693d2c`);

                setData(response.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [category]);

    if (loading) {
        return <div>대기 중...</div>
    }
    if (data === null) {
        return <data>기사가 없습니다.</data>
    }

    return (
        <div>
            <NewsItemBlock>
                {data.map(article => (
                    <Newitem key={article.url} article={article}></Newitem>
                ))}
            </NewsItemBlock>
        </div>
    );
};

export default Newitems;