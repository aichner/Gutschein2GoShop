//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './lineitem.scss';

class LineItem extends React.Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    this.props.updateLineItemInCart(lineItemId, this.props.lineItem.quantity - 1);
  }

  incrementQuantity(lineItemId) {
    this.props.updateLineItemInCart(lineItemId, this.props.lineItem.quantity + 1);
  }

  render() {
    return (
      <li className="line-item mt-2 pb-2">
        <div className="row">
          <div className="col">
            <div className="row flex-center">
              <div className="col-auto text-left">
                <p className="font-weight-bold mb-0">
                {this.props.lineItem.title}
                </p>
              </div>
              <div className="col text-right">
                <MDBBtn 
                color="danger"
                size="sm"
                onClick={() => this.props.removeLineItemInCart(this.props.lineItem.id)}
                >
                <MDBIcon icon="times" className="m-0" />
                </MDBBtn>
              </div>
            </div>
            <div className="row flex-center">
              <div className="col-auto text-left">
                <div>
                  <MDBBtn
                  color="orange"
                  size="sm"
                  outline
                  className="ml-0"
                  onClick={() => this.decrementQuantity(this.props.lineItem.id)}
                  >
                  <MDBIcon icon="minus" className="m-0" />
                  </MDBBtn>
                  <span className="ml-1 mr-1">{this.props.lineItem.quantity}</span>
                  <MDBBtn
                  color="orange"
                  size="sm"
                  onClick={() => this.incrementQuantity(this.props.lineItem.id)}
                  >
                  <MDBIcon icon="plus" className="m-0" />
                  </MDBBtn>
                </div>
              </div>
              <div className="col text-right">
                € { (this.props.lineItem.quantity * this.props.lineItem.variant.price).toFixed(2) }
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
