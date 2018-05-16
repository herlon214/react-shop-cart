import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart() {
    this.props.handleAddCart(this.props.id)
  }

  render() {
    
    return (
      <div >
          <div className="col s12 m3">
            <div className="card">
              <div className="card-image">
                <img src={this.props.imgSrc} className="responsive-img"/>

                <a onClick={this.handleAddCart}
                  className="btn-floating halfway-fab  waves-effect waves-light blue-grey">
                  <i className="material-icons">add_shopping_cart</i>
                </a>              
              </div>
              <div className="blue-grey lighten-5">
                  <span className="card-title" style={{padding: '.3em'}}>$ {this.props.price}</span>
              </div>
              <div className="card-content blue-grey lighten-3">
                <p>{this.props.name}</p>
                ({this.props.quantity})
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Product;
