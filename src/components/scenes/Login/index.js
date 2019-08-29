import React, {Component} from 'react';
import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div className="form-popup" id="myForm" >
      		<form action="#" className="form-container">
      			<button className="cancel" onClick={this.closeForm}>X</button>
      			<h1>Login</h1>
      			<label htmlFor="email"><b> Email </b> </label>
      			<input type="text" placeholder="Enter your Email" name="email" required></input>
      			<label htmlFor="psw"><b>Password</b></label>
      			<input type="password" placeholder="Enter Password" name="psw" required></input>

      			<button type="submit" className="btn login">Login</button>
      		</form>
	     </div>
    );
  }
}

export default Login;
