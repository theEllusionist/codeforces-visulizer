import React from 'react';
import Navbar from "./Components/navbar";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Home";
import Problems from "./Problems";
import Compare from "./Compare";
class App extends React.Component{

    render() {
      return(
            <BrowserRouter >
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/problem' component={Problems}/>
                        <Route path='/compare_problems'  component={Compare}/>
                    </Switch>
                 </div>
            </BrowserRouter>
  )
 }
};

export default App;
