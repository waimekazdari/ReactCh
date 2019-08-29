import React, {Component} from 'react';
import './style.css';

class Header extends Component {

  render(){

    return(
      <div>
          <header>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <nav>
              <ul>
                <li><img src={require('./Images/logo.png')}/></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">My Preferrd</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </nav>
            <button>Login</button>
        </header>
      </div>
    );
  }
}

export default Header;
