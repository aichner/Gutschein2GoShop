//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> Components
import {
  Product
} from '../../molecules';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBRow,
    MDBCol,
    MDBContainer,
} from 'mdbreact';

//> CSS
import './shop.scss';

class Shop extends React.Component{

  state = {
    isCartOpen: false,
    isCustomerAuthOpen: false,
    isNewCustomer: false,
    products: [],
    checkout: { lineItems: { edges: [] } }
  };

  componentDidMount = () => {
    let products = this.props.products;
    console.log(products);
    this.setState({
      products,
    });
  }

  render(){
    const { products } = this.state;

    // Debugging
    //console.log(products);

    return(
      <MDBContainer id="shop" fluid>
        <MDBRow className="flex-center">
          {products && products.map((product, i) => {
            return(
              <Product
              key={i}
              id={product.node.id}
              product={product}
              addVariantToCart={this.props.addVariantToCart}
              checkout={this.state.checkout}
              />
            );
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Shop;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
