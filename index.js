import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/Login';
//import Hello from './Hello';
import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

//render(<App />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter>
  <Route exact path="/" component={Login}/>
  <Route path="/home" component={App}/>
 </BrowserRouter>, document.getElementById('root'));
// <BrouserRouter>
//   <Route exact path="/" component={Login}/>
  
// </BrouserRouter>
//<Route path="/Home" component={App}/>