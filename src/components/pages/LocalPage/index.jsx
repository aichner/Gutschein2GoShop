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
// Copy
import copy from "copy-to-clipboard";

//> Redux
// Connect
import { connect } from 'react-redux';
// Actions
import { signInAnonymous } from '../../../store/actions/authActions';
import { checkName } from '../../../store/actions/shopActions';
import { getLocal } from '../../../store/actions/shopActions';

//> CSS
import "./localpage.scss";

class VerifyPage extends React.Component {
  componentDidMount = () => {
    const { location } = this.props;
    // Extract the city name from the path (/loc => loc)
    const localName = location.pathname.substring(1);

    // Retrieve information about local
    this.props.getLocal(localName);
  }

  render() {
    const { local } = this.props;
    return (
      <MDBContainer id="local" className="py-5 my-5 text-center">
      {local ? (
        <>
        <MDBIcon icon="clock" className="orange-text mb-3" size="3x" />
        <h2>
        {local.name}
        </h2>
        <input type="text" className="form-control"/>
        </>
      ) : (
        <h2>{local} not found</h2>
      )}
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shopError: state.shop.shopError,
    shop: state.shop.shop,
    local: state.shop.local,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInAnonymous: () => dispatch(signInAnonymous()),
    getLocal: (name) => dispatch(getLocal(name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(VerifyPage));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
