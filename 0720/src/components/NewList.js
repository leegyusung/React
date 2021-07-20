import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';

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

const NewList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === "all" ? '' : `&category=${category}`;
                const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=175d01a707cb40ef9a419aaef7735510`);
                setArticles(result.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [category]);

    if (loading) {
        return <div>読み込み中。。。</div>
    }
    if (!articles) {
        return null;
    }
    return (
        <div>
            <NewsItemBlock>
                {articles.map(article => (
                    <NewsItem key={article.url} article={article}></NewsItem>
                ))}
            </NewsItemBlock>
        </div>
    );
};

export default NewList;