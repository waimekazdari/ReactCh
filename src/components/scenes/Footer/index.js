import React, {Component} from 'react';
import './style.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <footer>
			   <h4>feel free and <a href="#">contact us</a></h4>
  		</footer>
    );
  }
}

export default Footer;
