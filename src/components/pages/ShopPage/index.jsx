//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { withRouter, Link, Redirect } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBAlert,
  MDBIcon,
} from "mdbreact";

//> Additional
// Prop types
import PropTypes from 'prop-types';

//> Apollo and GraphQL
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import gql from 'graphql-tag';

//> Queries
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  addVariantToCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout
} from '../../../utilities/checkout';

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { signInAnonymous } from '../../../store/actions/authActions';
import { checkName } from '../../../store/actions/shopActions';

//> Components
import {
  Cart
} from "../../molecules";
import {
  Shop
} from "../../organisms";

//> CSS
import "./shoppage.scss";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      products: [],
      checkout: { lineItems: { edges: [] } }
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.openCustomerAuth = this.openCustomerAuth.bind(this);
    this.closeCustomerAuth = this.closeCustomerAuth.bind(this);
    this.addVariantToCart = addVariantToCart.bind(this);
    this.updateLineItemInCart = updateLineItemInCart.bind(this);
    this.removeLineItemInCart = removeLineItemInCart.bind(this);
    this.showAccountVerificationMessage = this.showAccountVerificationMessage.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
  }

  componentDidMount() {
    this.props.createCheckout({
      variables: {
        input: {}
      }}).then((res) => {
      this.setState({
        checkout: res.data.checkoutCreate.checkout
      });
    });
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      shop: PropTypes.object,
    }).isRequired,
    createCheckout: PropTypes.func.isRequired,
    checkoutLineItemsAdd: PropTypes.func.isRequired,
    checkoutLineItemsUpdate: PropTypes.func.isRequired
  }

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  openCustomerAuth(event) {
    if (event.target.getAttribute('data-customer-type') === "new-customer") {
      this.setState({
        isNewCustomer: true,
        isCustomerAuthOpen: true
      });
    } else {
      this.setState({
        isNewCustomer: false,
        isCustomerAuthOpen: true
      });
    }
  }

  showAccountVerificationMessage(){
    this.setState({ accountVerificationMessage: true });
    setTimeout(() => {
      this.setState({
        accountVerificationMessage: false
      });
    }, 5000);
  }

  closeCustomerAuth() {
    this.setState({
      isCustomerAuthOpen: false,
    });
  }


  componentDidMount = () => {
    const { match } = this.props;

    if(match.params.username){
      // Parameter is given
      let name = match.params.username;
      this.props.checkName(name);
    }

    this.props.createCheckout({
      variables: {
        input: {}
      }}).then((res) => {
      this.setState({
        checkout: res.data.checkoutCreate.checkout
      });
    });
  }
  
  render() {
    const { shopError, shop, match } = this.props;

    console.log(this.props);

    if (this.props.data.loading) {
      return (
        <MDBContainer className="text-center py-5 my-5">
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </MDBContainer>
      );
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    if(shopError === undefined){
      return (
        <MDBContainer id="message" className="py-5 my-5 text-center">
          <MDBIcon icon="clock" className="orange-text mb-3" size="3x" />
          <h2>
          Verifizierung ausstehend
          </h2>
          <p className="lead mb-5">Die Echtheit von <strong className="orange-text">
          {match.params && match.params.username}</strong> ist noch nicht bestätigt.</p>
          <a href="https://gutschein2go.at">
            <MDBBtn color="orange" size="lg">
              Zurück zur Startseite
            </MDBBtn>
          </a>
        </MDBContainer>
      );
    } else if(shopError === true) {
      // Shop not found
      return (
        <MDBContainer id="message" className="py-5 my-5 text-center">
          <MDBIcon icon="exclamation-triangle" className="orange-text mb-3" size="3x" />
          <h2>
          Der Partner <strong className="orange-text">{match.params && match.params.username}</strong> existiert nicht.
          <MDBIcon icon="warning" className="danger-text ml-2"/>
          </h2>
          <p className="lead mb-5">Haben Sie sich vertippt?</p>
          <a href="https://gutschein2go.at/join">
            <MDBBtn color="orange" size="lg">
              Partner werden
            </MDBBtn>
          </a>
        </MDBContainer>
      );
    } else if(shopError === false) {
      // Shop found and valid
      return(
        <>
        <MDBContainer className="text-center mt-5 py-5">
          <h2>Unterstützen Sie</h2>
          <h2 className="h1 font-weight-bold">{shop.company.name}</h2>
        </MDBContainer>
        <Shop 
        products={this.props.data.shop.collectionByHandle.products.edges}
        addVariantToCart={this.addVariantToCart} 
        checkout={this.state.checkout}
        />
        <Cart
          removeLineItemInCart={this.removeLineItemInCart}
          updateLineItemInCart={this.updateLineItemInCart}
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          customerAccessToken={this.state.customerAccessToken}
        />
        </>
      );
    } else{
      return (
        <>
        {match.params.username ? (
          <MDBContainer className="text-center py-5 my-5">
            <div className="spinner-grow text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </MDBContainer>
        ) : (
          window.location.replace("https://gutschein2go.at")
        )}
        </>
      );
    }
  }
}

const query = gql`
  query query($company: String!) {
    shop {
      name
      description
      collectionByHandle(handle: $company) {
        handle
        id
        products(first: 50) {
          edges {
            node {
              id
              title
              description
              createdAt
              tags
              variants(first: 1) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    id
                    title
                    availableForSale
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      src
                    }
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    shopError: state.shop.shopError,
    shop: state.shop.shop,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInAnonymous: () => dispatch(signInAnonymous()),
    checkName: (name) => dispatch(checkName(name))
  }
}

const HomePageWithDataAndMutation = compose(
  graphql(query, {
    options: (props) => ({ variables: { company: props.match.params.username } })
  }),
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(connect(mapStateToProps,mapDispatchToProps)(withRouter(ShopPage)));

export default HomePageWithDataAndMutation;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
