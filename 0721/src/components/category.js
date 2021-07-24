import React from 'react';
import styled, { css } from 'styled-components';
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
        test: 'サイエンス'
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

const CategoryBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`
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
    font-weight:600;
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

const category = () => {
    return (
        <CategoryBlock>
            {categories.map(i =>
                <Category key={i.name}
                    activeClassName="active"
                    exact={i.name === 'all'}
                    to={i.name === 'all' ? '/' : `/${i.name}`}>
                    {i.test}
                </Category>)
            }
        </CategoryBlock >
    );
};

export default category;