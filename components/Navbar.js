import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
 
  constructor(props){
    super();
    
  }
  handleChange = event => {
    console.log("1" + event.target.value);
    const { name, value} = event.target
    console.log("Value" + value);
    this.props.citySelectedinNavbar(value);
  }
  render() {
    return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <div className="navbar-header">
              <h4>Products</h4>
        </div>
        <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <Link className="nav-link" to="/hello">
                <button> Logout </button>
              </Link>
            </li>
            <li className="nav-item">
              <div className="form-group">
                <select name="city" className="form-control" value={this.props.setvalue} onChange={this.handleChange}>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="chandigarh">Chandigarh</option>
                </select>
               </div> 
            </li>
        </ul> 
        
      </div>
    </nav>
    )}

}
export default Navbar;