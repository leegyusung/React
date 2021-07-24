import React from 'react';
import Categories from '../components/category';
import NewsLists from '../components/newitems';

const NewsPage = ({ match }) => {
    const category = match.params.category || 'all';


    return (
        <>
            <Categories></Categories>
            <NewsLists category={category}></NewsLists>
        </>
    );
};

export default NewsPage;