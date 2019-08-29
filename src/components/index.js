import React, {Component} from 'react';
import './style.css';
import Login from './scenes/Login/index';
import Home from './scenes/Home/index';
import Header from './scenes/Header/index';
import Footer from './scenes/Footer/index';

class App extends Component {
  

  render(){
    return(
      <div>
        <Login/>
        <div class="container" id="container">
          <Header/>
          <Home/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
