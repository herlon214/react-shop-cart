import React from 'react';
import Cart from './cart';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue-grey darken-3">
          <div className="nav-wrapper">
            <ul className="right">
              <li><a href="#" className="modal-trigger" data-target="mymodal"><i className="material-icons">shopping_cart</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


export default Navbar;
