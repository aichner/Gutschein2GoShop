//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Components
import {
  LineItem
} from '../../atoms';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    let checkoutURL = this.props.checkout.webUrl;
    window.open(checkoutURL);
  }

  render() {
    let lineItems = this.props.checkout.lineItems.edges.map((lineItem) => {
      return (
        <LineItem
          removeLineItemInCart={this.props.removeLineItemInCart}
          updateLineItemInCart={this.props.updateLineItemInCart}
          key={lineItem.node.id.toString()}
          lineItem={lineItem.node}
        />
      );
    });

    return (
      <MDBModal 
      fullHeight 
      position="right"
      backdrop={true}
      className="modal-cart modal-white text-dark"
      isOpen={this.props.isCartOpen}
      toggle={this.props.handleCartClose}
      >
        <MDBModalHeader tag="p" toggle={this.props.handleCartClose}>
          Wie Sie helfen
        </MDBModalHeader>
        <MDBModalBody className="text-center">
          {lineItems}
          <MDBRow className="totals">
            <MDBCol size="6" className="text-left">
              Zwischensumme
            </MDBCol>
            <MDBCol size="6" className="text-right">
              € {this.props.checkout.subtotalPrice}
            </MDBCol>
            <MDBCol size="12" className="text-left">
              <small className="text-muted">inkl. Steuer</small>
            </MDBCol>
            <MDBCol size="6" className="font-weight-bold text-left">
              Gesamt
            </MDBCol>
            <MDBCol size="6" className="font-weight-bold text-right">
              € {this.props.checkout.totalPrice}
            </MDBCol>
          </MDBRow>
          <div>
            <MDBBtn color="orange" outline onClick={this.props.handleCartClose}>
            <MDBIcon icon="angle-left" className="pr-2"/>
            Weitere kaufen
            </MDBBtn>
            <MDBBtn color="success" size="lg" onClick={this.openCheckout}>
            <MDBIcon icon="check" className="pr-2" size="lg"/>
            Checkout
            </MDBBtn>
          </div>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

export default Cart;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
