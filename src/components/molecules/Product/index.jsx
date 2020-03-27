//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBCardFooter,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";

//> CSS
import "./product.scss";

class Product extends React.Component {
  // Init state
  state = {
    value: 1,
    variant: undefined
  };

  componentDidMount = () => {
    let initialVariant = this.props.product.node.variants.edges[0].node.id;
    this.setState({
      variant: {
        id: initialVariant
      }
    });
  };

  decrease = () => {
    if (this.state.value > 1) {
      this.setState({ value: parseInt(this.state.value) - 1 });
    }
  };

  increase = () => {
    if (this.state.value < 999) {
      this.setState({ value: parseInt(this.state.value) + 1 });
    }
  };

  handleChange = e => {
    if (e.target.value >= 1 && e.target.value <= 999) {
      this.setState({
        value: parseInt(e.target.value)
      });
    }
  };

  render() {
    const { product } = this.props;

    return (
      <MDBCol key={this.props.id} md="4" className="product-item text-dark">
        <MDBCard className={!product.node.variants.edges[0].node.availableForSale ? "outofstock" : ""}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              {product.node.title}
            </MDBCardTitle>
            <MDBCardText
              className="text-center"
              dangerouslySetInnerHTML={{ __html: product.node.descriptionHtml }}
            ></MDBCardText>
            <div className="p-3">
            {!product.node.variants.edges[0].node.availableForSale ? (
              <p className="text-muted text-center">Dieser Gutschein ist leider nicht mehr verfügbar.</p>
            ) : (
              <>
              <p className="text-center mb-0">Anzahl</p>
              <div className="def-number-input number-input mb-2 ml-auto mr-auto">
                <button onClick={this.decrease} className="minus"></button>
                <input
                  className="quantity"
                  name="quantity"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="number"
                  min="1"
                  max="10"
                />
                <button onClick={this.increase} className="plus"></button>
              </div>
              </>
            )}
            </div>
          </MDBCardBody>
          <MDBCardFooter className="text-center">
            <MDBBtn
              color="orange"
              disabled={!product.node.variants.edges[0].node.availableForSale}
              onClick={() => {
                if(product.node.variants.edges[0].node.availableForSale){
                  this.props.addVariantToCart(
                    this.state.variant.id,
                    this.state.value
                  )
                }}
              }
            >
              In den Warenkorb
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default Product;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
