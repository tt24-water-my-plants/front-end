import React from 'react';
import { Switch, Route } from 'react-router-dom';


import NavBar from './Components/NavBar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'


function App() {
  
  return (
  
    <div>
    <NavBar/>
<Switch>

<Route path='/login' exact component={Login}/>
<Route path='/signup' exact component={SignUp}/>
<Route path='/Home' exact component={Home}/>
   
</Switch>
    </div>
  );
}

export default App;