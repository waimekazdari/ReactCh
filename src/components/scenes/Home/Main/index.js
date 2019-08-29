import React, {Component} from 'react';
import './style.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return(
      <div class="main">
        <section>
            <ul>
              <li>
                <img src={require('./Images/1.jpg')}/>
                <i class="fa fa-thumbs-up" id='like' > </i>
                <i class="fa fa-thumbs-down" id='dislike' > </i>
              </li>
            </ul>
        </section>
        <section>
          <ul>
            <li> <img src={require('./Images/2.jpg')}/>
              <i class="fa fa-thumbs-up" id='like' > </i>
              <i class="fa fa-thumbs-down" id='dislike' > </i>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li> <img src={require('./Images/3.jpg')}/>
              <i class="fa fa-thumbs-up" id='like' > </i>
              <i class="fa fa-thumbs-down" id='dislike' > </i>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li> <img src={require('./Images/4.jpg')}/>
              <i class="fa fa-thumbs-up" id='like' > </i>
              <i class="fa fa-thumbs-down" id='dislike' > </i>
            </li>
          </ul>
        </section>
     </div>
    );
  }
}

export default Main;
