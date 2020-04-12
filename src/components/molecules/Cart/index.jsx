//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link } from "react-router-dom";

//> Components
import { LineItem } from "../../atoms";

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
  MDBInput,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./cart.scss";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
    this.state = {
      agb: false,
    };
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
          {lineItems && lineItems.length > 0 && lineItems}
          {lineItems && lineItems.length < 1 && (
            <>
              <p className="font-weight-bold mb-1">
                Noch keine Gutscheine im Warenkorb.
              </p>
              <div className="mb-3">
                <MDBBtn
                  color="orange"
                  outline
                  onClick={this.props.handleCartClose}
                >
                  <MDBIcon icon="angle-left" className="pr-2" />
                  Weitere kaufen
                </MDBBtn>
              </div>
            </>
          )}
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
            <hr />
            <div className="text-left">
              <MDBInput
                label={
                  <small>
                    Ich bestätige die{" "}
                    <a href="https://gutschein2go.at/anb" target="_blank">
                      ANB
                    </a>{" "}
                    gelesen zu haben und nehme zur Kenntnis das gutschein2go
                    lediglich den Marktplatz zur Verfügung stellt und die
                    angebotenen Gutscheine ausschließlich beim jeweiligen
                    Verkäufer eingelöst werden können. gutschein2go haftet nicht
                    dafür, dass der Verkäufer die Leistungen zu den vereinbarten
                    Bedingungen erbringt.
                  </small>
                }
                filled
                type="checkbox"
                id="checkbox2"
                checked={this.state.agb}
                onChange={(e) => {
                  this.setState({
                    agb: e.target.checked,
                  });
                }}
                containerClass="mt-4 mb-1"
              />
            </div>
            <small className="d-block text-muted mb-2">
              Ich akzeptiere die{" "}
              <a href="https://gutschein2go.at/privacy" target="_blank">
                Datenschutzerklärung
              </a>
              .
            </small>
            <MDBBtn
              color="success"
              size="lg"
              onClick={this.openCheckout}
              disabled={lineItems.length < 1 || !this.state.agb}
            >
              <MDBIcon icon="check" className="pr-2" size="lg" />
              Weiter
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
