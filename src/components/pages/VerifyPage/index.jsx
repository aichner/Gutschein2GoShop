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

//> CSS
import "./verifypage.scss";

class VerifyPage extends React.Component {
  render() {
    const { match } = this.props;

    if(match.params.token === "check"){
      return (
        <MDBContainer id="message" className="py-5 my-5 text-center">
          <MDBIcon icon="clock" className="orange-text mb-3" size="3x" />
          <h2>
          Gutschein überprüfen
          </h2>
          <input type="text" className="form-control"/>
        </MDBContainer>
      );
    } else {
      return(
        <MDBContainer id="message" className="py-5 my-5 text-center">
          <MDBIcon icon="clock" className="orange-text mb-3" size="3x" />
          <h2>
          Gutschein 
          </h2>
          <p className="lead mb-5">Die Echtheit von <strong className="orange-text">
          Test</strong> ist noch nicht bestätigt.</p>
          <a href="https://gutschein2go.at">
            <MDBBtn color="orange" size="lg">
              Zurück zur Startseite
            </MDBBtn>
          </a>
        </MDBContainer>
      );
    }
  }
}

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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(VerifyPage));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
