import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Profile from './Profile';


const Profiles = () => {
    const backStyle = {
        background: 'black',
        color: 'white'
    }
    return (
        <div>
            <h3>利用者リスト</h3>
            <ul>
                <li>
                    <NavLink activeStyle={backStyle} to="/profiles/veloport">veloport</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={backStyle} to="/profiles/react">react</NavLink>
                </li>
            </ul>
            <Route path="/profiles" exact render={() => <div>利用者を選んでください</div>}></Route>
            <Route path="/profiles/:username" component={Profile}></Route>

        </div>
    );
};

export default Profiles;