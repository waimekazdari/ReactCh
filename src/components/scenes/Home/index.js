import React,{Component} from 'react';
import './style.css';
import Sidebare from './SideBare/index';
import Main from './Main/index';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return(
      <div class="wrapper">
        <Sidebare/>
        <Main/>
      </div>
    );
  }
}

export default Home;
