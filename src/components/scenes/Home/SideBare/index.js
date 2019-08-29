import React, {Component} from 'react';
import './style.css';

class Sidebare extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return(
      <div class="sidebare">
				<h2>Categories</h2>
				<h4>
					<nav>
						<ul>
							<li><a href="#">Women</a></li>
							<li><a href="#">Men</a></li>
							<li><a href="#">Kids</a></li>
						</ul>
					</nav>
				</h4>
			</div>
    );
  }
}

export default Sidebare;
