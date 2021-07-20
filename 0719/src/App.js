import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profiles from "./Profiles";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">プロフィール</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path={['/about', '/info']} component={About}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route render={({ location }) => (
          <div>
            <h2>このページは存在しないページです。</h2>
            <p>{location.pathname}</p>
          </div>
        )}></Route>
      </Switch>
    </>
  );
}

export default App;
