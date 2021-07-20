import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
    {
        name: 'all',
        test: '全件'
    },
    {
        name: 'business',
        test: 'ビジネス'
    },
    {
        name: 'entertainment',
        test: 'エンターテイメント'
    },
    {
        name: 'health',
        test: '健康'
    },
    {
        name: 'science',
        test: '科学'
    },
    {
        name: 'sports',
        test: 'スポーツ'
    },
    {
        name: 'technology',
        test: '技術'
    }
]
const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
 
  &:hover {
    color: #495057;
  }
  &.active{
    font-weight:600 ;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover{
        color: #3bc9db;
    }
}
 
  & + & {
    margin-left: 2rem;
  }
`;
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((categorie) => (
                <Category key={categorie.name}
                    activeClassName='active'
                    exact={categorie.name === 'all'}
                    to={categorie.name === 'all' ? '/' : `${categorie.name}`}>{categorie.test}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;