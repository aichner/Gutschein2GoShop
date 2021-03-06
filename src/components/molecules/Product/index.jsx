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
  MDBIcon,
  MDBBadge,
} from "mdbreact";

//> CSS
import "./product.scss";

class Product extends React.Component {
  // Init state
  state = {
    value: 1,
    variant: undefined,
  };

  componentDidMount = () => {
    let initialVariant = this.props.product.node.variants.edges[0].node.id;
    this.setState({
      variant: {
        id: initialVariant,
      },
    });
  };

  decrease = () => {
    if (this.state.value > 1) {
      this.setState({ value: parseInt(this.state.value) - 1 });
    }
  };

  increase = () => {
    if (this.state.value < 10) {
      this.setState({ value: parseInt(this.state.value) + 1 });
    }
  };

  render() {
    const { product, companyName } = this.props;

    return (
      <MDBCol
        key={this.props.id}
        md="2"
        className="product-item text-dark mb-5"
      >
        <MDBCard
          className={
            !product.node.variants.edges[0].node.availableForSale
              ? "outofstock"
              : ""
          }
        >
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              {product.node.title}
            </MDBCardTitle>
            <div className="mt-3">
              <small className="text-muted d-block">Einlösbarkeit</small>
              {product.node.tags.includes("physical") && (
                <MDBBadge color="elegant-color">
                  <MDBIcon icon="award" size="lg" />
                  Physikalisch
                </MDBBadge>
              )}
              {product.node.tags.includes("digital") && (
                <MDBBadge color="elegant-color">
                  <MDBIcon icon="mobile" size="lg" />
                  Digital
                </MDBBadge>
              )}
              <small className="text-muted d-block mt-2">Gutscheintyp</small>
              {product.node.tags.includes("wert") && (
                <MDBBadge color="success">
                  <MDBIcon icon="euro-sign" size="lg" />
                  Wergtuschein
                </MDBBadge>
              )}
              {product.node.tags.includes("leistung") && (
                <MDBBadge color="success">
                  <MDBIcon icon="box-open" size="lg" />
                  Leistungsgutschein
                </MDBBadge>
              )}
            </div>
            <MDBCardText className="text-center px-3 pt-3">
              <small>
                Dieser Gutschein kann ausschließlich bei {companyName} eingelöst
                werden.{" "}
                {product.node.tags.includes("wert") && (
                  <>
                    <span>
                      Dieser Gutschein ist ein Wertgutschein und berechtigt den
                      Gutscheinkäufer zum Erwerb von Waren und zur
                      Inanspruchnahme von Dienstleistungen bzw der Herstellung
                      von Werken des Verkäufers im Rahmen der vom Verkäufer in
                      seinem Geschäftsbetrieb angebotenen Leistungen.
                    </span>
                    {product.node.description && (
                      <span className="font-weight-bold mt-2 d-block">
                        {product.node.description}
                      </span>
                    )}
                  </>
                )}
                {product.node.tags.includes("leistung") && (
                  <>
                    <span>
                      Dieser Gutschein ist ein Leistungsgutschein und berechtigt
                      den Gutscheinkäufer zur Inanspruchnahme der bezeichneten
                      Leistung.
                    </span>
                    {product.node.description && (
                      <span className="font-weight-bold mt-2 d-block">
                        {product.node.description}
                      </span>
                    )}
                  </>
                )}
              </small>
            </MDBCardText>
            <div className="px-3 py-4">
              {!product.node.variants.edges[0].node.availableForSale ? (
                <p className="text-muted text-center">
                  Dieser Gutschein ist leider nicht mehr verfügbar.
                </p>
              ) : (
                <>
                  <p className="text-center my-0">Anzahl</p>
                  <div className="flex-center">
                    <MDBBtn
                      color="orange"
                      outline
                      onClick={this.decrease}
                      size="md"
                    >
                      <MDBIcon icon="minus" className="m-0" />
                    </MDBBtn>
                    <span className="font-weight-bolder mx-2 text-muted">
                      {this.state.value}
                    </span>
                    <MDBBtn color="orange" onClick={this.increase} size="md">
                      <MDBIcon icon="plus" className="m-0" />
                    </MDBBtn>
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
                if (product.node.variants.edges[0].node.availableForSale) {
                  this.props.addVariantToCart(
                    this.state.variant.id,
                    this.state.value
                  );
                }
              }}
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
