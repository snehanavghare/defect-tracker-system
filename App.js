import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Movieslist from './components/Movieslist';
import Hello from './Hello';
import About from './components/About';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'chennai',
    };
  }
  citySelectedinNavbar = (selectedValue) => {
    console.log(selectedValue);
    this.setState({
      city : selectedValue
    })
  }
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navbar citySelectedinNavbar= {this.citySelectedinNavbar} setvalue= {this.state.city}/>
            <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Movieslist} />
            <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
// <h1>Home Here!</h1>
// <Route path="" component={}/>
//           <Route path="" component={}/>
//           <Route path="" component={}/>