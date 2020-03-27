//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link, withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBView,
  MDBMask,
  MDBInput,
  MDBBtn,
  MDBFormInline,
  MDBSmoothScroll,
} from "mdbreact";

//> Images
import baristaBg from "../../../assets/content/barista.jpg";
import breadBg from "../../../assets/content/bread.jpg";
import shopBg from "../../../assets/content/shop.jpg";
import { ReactComponent as SetupImg } from "../../../assets/content/svg/setup.svg";
import { ReactComponent as GiftImg } from "../../../assets/content/svg/gift.svg";
import { ReactComponent as DeployImg } from "../../../assets/content/svg/deploy.svg";
import { ReactComponent as ShopImg } from "../../../assets/content/svg/shop.svg";
import { ReactComponent as VaultImg } from "../../../assets/content/svg/vault.svg";
import { ReactComponent as PartyImg } from "../../../assets/content/svg/party.svg";

let backgroundPictures = [
  baristaBg,
  breadBg,
  shopBg
];

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(backgroundPictures.length));
}

// Get randomized image
let randomBG = backgroundPictures[getRandomInt()];

class HomePage extends React.Component {
  render() {
    return (
      <div id="hero">
      <MDBView src={randomBG} fixed>
          <MDBMask overlay="black-light" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className=""
          >
            <MDBRow className="flex-center">
              <MDBCol md="6" className="white-text text-center text-md-left mb-5">
                <h1 className="display-4 font-weight-bold">Verzichten Sie nicht auf Ihre Umsätze!</h1>
                <h3>Ist Ihr Betrieb von der <strong className="orange-text">
                Corona Krise</strong> betroffen?</h3>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Verlieren Sie nicht Ihren Umsatz. Durch unseren unkomplizierter Gutscheinvertrieb Service verkaufen 
                  wir Ihren zukünftigen Kunden Gutscheine für nach der Krise.
                </h6>
                <MDBSmoothScroll to="service" offset={-150} className="d-inline-block p-0 m-0">
                  <MDBBtn color="white" size="lg">
                    <MDBIcon icon="angle-down" />
                    Mehr erfahren
                  </MDBBtn>
                </MDBSmoothScroll>
                <MDBSmoothScroll to="faq" offset={-150} className="d-inline-block p-0 m-0">
                  <MDBBtn color="white" outline size="lg">
                    <MDBIcon icon="question" />
                    FAQ
                  </MDBBtn>
                </MDBSmoothScroll>
              </MDBCol>
              <MDBCol md="6" className="mb-4 d-none d-sm-block">
                <MDBCard className="text-center">
                  <MDBCardBody>
                    <h2 className="font-weight-bold">Wie funktioniert es?</h2>
                    <p className="lead mb-2">
                    Unkomplizierter Gutscheinvertrieb in Österreich
                    </p>
                    <p>
                    Durch die <strong className="orange-text">Corona Krise</strong> haben viele Betriebe geschlossen 
                    und verlieren daher ihren gesamten Umsatz. Wir bieten individuelle Lösungen und ermöglichen den 
                    einfachen und unkomplizierten Online-Verkauf von Gutscheinen zur Unterstützung von lokalen 
                    Betrieben.
                    </p>
                    <h3 className="mt-4 mb-2">Entdecke Sie Ihre Vorteile</h3>
                    <MDBSmoothScroll to="service" offset={-150} className="d-inline-block p-0 m-0">
                      <MDBBtn color="elegant" size="lg">
                        <MDBIcon icon="angle-down" />
                        Mehr erfahren
                      </MDBBtn>
                    </MDBSmoothScroll>
                    <div className="mt-4">
                    <hr />
                      <p className="lead mt-4 mb-1">
                      Werden Sie jetzt Partner und erhalten Sie Ihren <strong>individuellen 
                      Online-Gutschein Service</strong>.
                      </p>
                      <Link to="join">
                      <MDBBtn color="orange" size="lg">
                        Partner werden
                      </MDBBtn>
                      </Link>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <section id="info">
        <MDBContainer className="py-5 mb-5 text-center text-white">
          <h2 className="font-weight-bold">Österreich hält zusammen!</h2>
          <p className="lead">
          Erwerben Sie jetzt Gutscheine, um Ihre lokalen Betriebe zu unterstützen und lösen Sie diese nach der 
          Corona-Krise ein.
          </p>
          {/*<MDBBtn color="white" size="lg">
          Partnerbetriebe anzeigen
          </MDBBtn>*/}
        </MDBContainer>
        </section>
        <section id="service">
          <MDBContainer>
            <h2 className="h1 font-weight-bold my-4 text-center">Wie es funktioniert</h2>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6" className="d-block d-sm-none">
                <SetupImg />
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">
                <span>1.</span>Registration und Verifizierung
                </p>
                <p className="mb-0">Treten Sie als Betrieb der wachsenden Gutschein2Go Plattform <strong>kostenlos
                </strong> bei.</p>
                <Link to="join">
                <MDBBtn color="orange" size="lg" className="my-3">
                  Partner werden
                </MDBBtn>
                </Link>
                <p>Nach der Registration werden Ihre Angaben auf deren Richtigkeit geprüft, um einen reibungslosen 
                Ablauf zu gewährleisten. Wenn wir Sie kontaktiert haben, ist dies bereits geschehen.</p>
              </MDBCol>
              <MDBCol md="6" className="d-none d-sm-block">
                <SetupImg />
              </MDBCol>
              <MDBCol md="6">
                <GiftImg />
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">
                <span>2.</span>Erstellung der Gutscheine
                </p>
                <p>Wir helfen Ihnen mit der Erstellung der Gutscheine. Sie können hier zwischen <strong>Wertgutscheine
                </strong> oder <strong>Produktgutscheine</strong> wählen.</p>
                <p className="font-weight-bolder mb-1">
                Wertgutscheine
                </p>
                <p>Ein von Ihnen festgelegter Geldbetrag. Eine Barauszahlung ist nicht möglich. Der Gutschein kann als 
                Bezahlmethode bei Ihnen eingelöst werden. Ist der Zahlbetrag kleiner als der Wert des Gutscheins, so 
                verfällt der restliche Gutscheinbetrag und der Gutschein wird entwertet.</p>
                <p className="font-weight-bolder mb-1">
                Produktgutscheine
                </p>
                <p>Ein von Ihnen festgelegtes Produkt. Der Gutschein kann gegen ein Produkt oder eine Sammlung von 
                Produkten eingelöst werden.</p><p><i>(z.B. 1x Wiener Frühstück, 1x Caffee Latte, ...)</i></p>
              </MDBCol>
              <MDBCol md="6" className="d-block d-sm-none">
                <DeployImg />
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">
                <span>3.</span>Veröffentlichung
                </p>
                <p>Sie erhalten Ihre persönlichen Gutschein Shop, wo Interessenten über einen Link 
                oder QR-Code Gutscheine erwerben können.</p>
                <p>
                Ihr individueller Link sieht wie folgt aus: <br/>
                <code>www.gutschein2go.at/s/username</code>
                </p>
                <p>Diesen können Sie beliebig auf verschiedenen Plattformen teilen. <strong>Interessenten können über 
                diesen Link Gutscheine von Ihnen erwerben.</strong></p>
              </MDBCol>
              <MDBCol md="6" className="d-none d-sm-block">
                <DeployImg />
              </MDBCol>
              <MDBCol md="6">
                <ShopImg />
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">
                <span>4.</span>Informieren (optional)
                </p>
                <p>Um die Reichweite zu erhöhen, empfehlen wir, ein Poster mit der Information und dem Gutschein 
                QR-Code und Link am Eingang zu Ihrem Betrieb aufzuhängen.</p>
                <p><strong>Übrigens: Wir bieten den Service, die Gutschein-Information kostenlos an Ihrem Betrieb für 
                Sie anzubringen, um die Ausgangsbeschränkungen zu unterstützen.</strong></p>
              </MDBCol>
              <MDBCol md="6" className="d-block d-sm-none">
                <VaultImg />
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">
                <span>5.</span>Verdienen
                </p>
                <p>
                Nun ist alles bereit und Interessenten können Ihre Gutscheine erwerben. Sie 
                erhalten <strong>wöchentliche Berichte</strong> über Ihren Umsatz und können selbst entscheiden, 
                wann dieser ausgezahlt wird.
                </p>
              </MDBCol>
              <MDBCol md="6" className="d-none d-sm-block">
                <VaultImg />
              </MDBCol>
              <MDBCol md="6">
                <PartyImg />
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">
                <span>6.</span>Wiedereröffnen
                </p>
                <p>Nach der Corona-Krise können Sie Ihren Betrieb wie gewohnt weiterführen. Alle treuen Kunden, die Sie 
                während der Krise durch den Kauf von Gutscheinen unterstützt haben, können diese nun bei Ihnen einlösen.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section id="support" className="my-5">
          <MDBContainer className="text-center text-white py-5">
            <h2>Wir sind für Sie da!</h2>
            <p className="lead font-weight-bold">
            Unsere Partner erhalten automatisch Premium Support.
            </p>
            <Link to="join">
            <MDBBtn color="white" size="lg">
            Partner werden
            </MDBBtn>
            </Link>
          </MDBContainer>
        </section>
        <section id="faq">
          <MDBContainer>
            <h2 className="h1 font-weight-bold my-4 text-center">Häufig gestellte Fragen</h2>
            <MDBRow>
              <MDBCol md="6">
                <p className="lead font-weight-bold">Welche Arten von Gutscheine gibt es?</p>
                <MDBRow>
                  <MDBCol md="6">
                    <p className="font-weight-bolder">Wertgutschein</p>
                    <p>
                    Ein von Ihnen <strong>festgelegter Geldbetrag</strong>. Eine Barauszahlung ist nicht möglich. Der 
                    Gutschein kann als Bezahlmethode bei Ihnen eingelöst werden. Ist der Zahlbetrag kleiner aus der 
                    Wert des Gutscheins, so verfällt der restliche Gutscheinbetrag und der Gutschein wird entwertet.
                    </p>
                  </MDBCol>
                  <MDBCol md="6">
                    <p className="font-weight-bolder">Produktgutschein</p>
                    <p>
                    Ein von Ihnen <strong>festgelegtes Produkt</strong>. Der Gutschein kann gegen ein Produkt oder eine 
                    Sammlung von Produkten eingelöst werden.
                    </p>
                    <p>
                    <i>(z.B. 1x Wiener Frühstück, 1x Caffee Latte)</i>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">Wie erhalten Interessenten Gutscheine?</p>
                <p>
                Sie haben die Möglichkeit, an Ihrem Betrieb ein <a>Poster</a> mit Ihrem individuellen Link und QR Code 
                anzubringen oder Ihren individuellen Link selbst auf ausgewählten Plattformen wie Facebook zu 
                vermarkten.
                </p>
                <p>Der Interessent kann auf der individuellen Homepage von Ihnen definierte Gutscheine erwerben.</p>
                <p className="font-weight-bold">
                Übrigens: Wir bieten den Service, die Gutschein-Information kostenlos an Ihrem Betrieb für Sie 
                anzubringen, um die Ausgangsbeschränkungen zu unterstützen.</p>
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">Wie validiere ich einen Gutschein?</p>
                <p>
                Wenn Sie nach der Krise Ihren Betrieb wieder öffnen und Kunden mit den von uns ausgestellten Gutscheinen
                bezahlen wollen, so bieten wir die einzigartige, integrierte und kostenlose Online-App um einen 
                Gutschein zu validieren.
                </p>
                <p>
                Sie scannen dazu einfach den QR Code, der entweder auf einer physikalischen Gutscheinkarte oder im 
                Inhalt einer E-Mail vorhanden ist und die Applikation zeigt Ihnen an, ob der Gutschein gültig ist.
                </p>
                <p>Gerne bieten wir Ihnen <a href="mailto:support@gutschein2go.at">kostenlose Unterstützung</a>.</p>
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">Was geschieht mit einem Gutschein nach Verwendung?</p>
                <p>
                Der Gutschein wird nach Verwendung und Validierung über die App automatisch entwertet. Sie können den 
                Gutschein bei Bedarf einfordern und entsorgen.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">Ist die Teilnahme kostenlos?</p>
                <p>
                Ja. Der Service der Plattform und angebotenen Leistungen werden auf Basis einer Provision von 15% pro 
                verkauften Gutschein gedeckt.
                </p>
              </MDBCol>
              <MDBCol md="6">
                <p className="lead font-weight-bold">Ist eine mehrfache Verwendung möglich?</p>
                <p>
                Ist der Zahlbetrag kleiner aus der Wert des Gutscheins, so verfällt der restliche Gutscheinbetrag und 
                der Gutschein wird entwertet. Ein Gutschein ist immer nur einmal einlösbar.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section id="calltoaction" className="mt-5">
          <MDBContainer className="py-5 text-center text-white">
            <h2>Jetzt Partner werden und Ihr Gewerbe sichern!</h2>
            <Link to="join">
            <MDBBtn color="white" size="lg">
            Partner werden
            </MDBBtn>
            </Link>
          </MDBContainer>
        </section>
      </div>
    );
  }
}

export default withRouter(HomePage);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
