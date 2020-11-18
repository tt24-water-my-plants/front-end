import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavBar from './Components/NavBar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PlantPage from './Components/PlantPage';

import PrivateRoute from './Components/PrivateRoute';


function App() {
  
  return (
    <Router> 
{/* //temp. routing feel free to change if you need to */}
    <div>
    <NavBar/>
<Switch>
{/* <Route exact path='/'>
  <Redirect to='/Home' />
</Route> */}
<Route exact path='/Plants' component={PlantPage} />
<Route path='/login' exact component={Login}/>
<Route path='/signup' exact component90={SignUp}/>
<Route path='/Home' exact component={() => {
  window.location.href= 'https://water-my-plants-bw.vercel.app/'; return null;
}}/>
   
</Switch>
    </div>
    </Router>
  );
}

export default App;