import React from 'react';
import { Switch, Route } from 'react-router-dom';


import NavBar from './Components/NavBar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PlantPage from './Components/PlantPage';

import PrivateRoute from './Components/PrivateRoute';


function App() {
  
  return (
  
    <div>
    <NavBar/>
<Switch>
{/* <Route exact path='/'>
  <Redirect to='/Plants' />
</Route> */}
<PrivateRoute exact path='/Plants' component={PlantPage} />
<Route path='/login' exact component={Login}/>
<Route path='/signup' exact component={SignUp}/>
<Route path='/Home' exact component={() => {
  window.location.href= 'https://water-my-plants-bw.vercel.app/'; return null;
}}/>
   
</Switch>
    </div>
  );
}

export default App;