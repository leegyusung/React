import React from 'react';
import Categories from '../components/Categories';
import NewList from '../components/NewList';

const NewPage = ({ match }) => {
    const category = match.params.category || 'all';
    return (
        <div>
            <Categories />
            <NewList category={category} />
        </div>
    );
};

export default NewPage;