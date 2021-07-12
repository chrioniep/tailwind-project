import { Switch, Route, BrowserRouter } from 'react-router-dom'

/*import logo from './logo.svg';
import './App.css';*/
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';

function App() {
  return (
       <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
