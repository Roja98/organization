
import './App.css';
import CreateOrgnization from '../src/pages/organization/createOrgnization'
import CreateProject from './pages/organization/project';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Settings from './pages/organization/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateOrgnization} />
        <Route path="/create/project" exact component={CreateProject} />
        <Route path="/general/settings" exact component={Settings} />
      </Switch>
    </BrowserRouter> 

    </div>
  );
}

export default App;
