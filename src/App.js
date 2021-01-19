import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Navbar from './components/Navbar'; 
import LoginScrn from './components/LoginScrn';
import RegisterScrn from './components/RegisterScrn';

function App() {
  return (
    <Router>
      <>
        <Navbar></Navbar>
      </>
      <>
        <Switch>
          <Route path="/login">
            <LoginScrn />
          </Route>
          <Route path="/registration">
            <RegisterScrn />
          </Route>  

          <Route path="/">
            <WelcomeScrn />
          </Route>                  
        </Switch>
      </>
    </Router>
  );
}

export default App;

function WelcomeScrn(props) {
  return (
    <div style={{display: "flex", justifyContent: "center", width: '100%', marginTop: "100px"}}>
      <div>Welcome {localStorage.getItem('firstname')}</div>
    </div>
  );
}