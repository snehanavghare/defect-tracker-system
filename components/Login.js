import React from 'react';
import data from '../registeration.json';
import moviesData from '../movies.json';

class Login extends React.Component {
  constructor(){
    super();
    this.state={
      email: "",
      password: "",
      count: 1,
      bookDate: "",

      emailError: "",
      passwordError: "",
      countError: "",
      bookDateError: "",
      credentialError: "",

      countValid: false,
      bookDateValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      credentialValid: false,
    }
  }

  handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name] : value,
    }, () => this.validateFields(name, value))
    console.log(this.state.email);
  }

  validateFields(fieldName, fieldValue) {
    let {emailError, emailValid, passwordError, passwordValid, countError, countValid, bookDateError, bookDateValid} = this.state
    const validEmailRegex = 
      RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    switch(fieldName) {
      case 'email':
      emailValid = validEmailRegex.test(fieldValue);
      emailError = emailValid ? "valid" : "Invalid Field"
      break;

      case 'password':
      passwordValid = fieldValue.length >= 6;
      passwordError = passwordValid ? "" : "Invalid Password" 
      break;

      case 'count':
      countValid = fieldValue >= 1;
      countError = countValid ? "" : "Value should be greater than 1";
      break;

      case 'bookDate':
      bookDateValid = new Date() < new Date(fieldValue);
      bookDateError = bookDateValid ? "" : "Date should be greater than current date"
      break;

      default:
      break;

    }
    this.setState({
      emailError, emailValid, passwordError, passwordValid, bookDateError, bookDateValid, countError, countValid
    }, this.validateForm );
  }

  validateForm(){
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid && this.state.countValid && this.state.bookDateValid
    });
  }
  handlesubmit = (e) => {
    e.preventDefault();
    const {credentialError, credentialValid, email, password} = this.state
    
     data.find(item => {
      item.email == email && item.password == password ? credentialValid = true : credentialValid = false
     
    })
    console.log(credentialValid);
    credentialError = credentialValid ? (this.props.history.push("/home")) : "Login Credential doesn't exist";
    this.setState({
      credentialError, credentialValid
    })
  }
  render(){
    console.log(moviesData);
    return(
      <div>
        <form className="form-horizontal" onSubmit={this.handlesubmit}>
            <div>
              <h2>Login</h2>
            </div>
            <div className="form-group">
              <label className="control-label">Email :</label>
              <div className="">
                <input type="email" name="email" className="form-control" onChange={this.handlechange} value={this.state.email} required/>
                {!this.state.emailValid && <span className="text-danger">{this.state.emailError} </span>}
              </div>
            </div><br/>
            <div className="form-group">
              <label className="control-label">Password :</label>
              <div className="">
                <input type="password" name="password" className="form-control" onChange={this.handlechange} value={this.state.password} required/>
                {!this.state.passwordValid && <span className="text-danger">{this.state.passwordError}</span>}
              </div>
            </div><br/>
            <div className="form-group">
              <label className="control-label">Count</label>
              <div>
                <input type="number" name="count" className="form-control" value={this.state.count} onChange={this.handlechange} required/>
                {!this.state.countValid && <span className="text-danger">{this.state.countError}</span>}
              </div>
            </div><br/>
            <div className="form-group">
              <label className="control-label">Booked date</label>
              <div>
                <input type="date" name="bookDate" className="form-control" value={this.state.bookDate} onChange={this.handlechange} required/>
                {!this.state.bookDateValid && <span className="text-danger">{this.state.bookDateError}</span>}
              </div>
            </div>
            <div className="form-group">
              <button type="submit" disabled={!this.state.formValid} className="btn btn-primary"> Submit</button><br/>
              {!this.state.credentialValid && <span className="text-danger">{this.state.credentialError}</span>}
            </div>
        </form>
      </div>
    );
  }
}
export default Login;