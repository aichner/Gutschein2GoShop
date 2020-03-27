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
    MDBIcon,
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
      <MDBContainer id="shop" fluid className="py-5 text-center">
        <h3 className="mb-5">
        Erwerben Sie einen Gutschein. <MDBIcon icon="heart" className="pink-text" /><br/>
        Einlösbar nach Ende der Corona-Krise direkt bei uns.
        </h3>
        {products && products.length === 0 &&
          <>
            <p className="lead font-weight-bold mb-0">Derzeit sind keine Gutscheine vorhanden.</p>
            <p>Besuchen Sie uns später noch einmal</p>
          </>
        }
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
