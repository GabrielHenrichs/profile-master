import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled, { createGlobalStyle } from 'styled-components';
import Logo from './logo~rUsjTWbd.png';
import html2canvas from 'html2canvas';
import { shade } from 'polished';

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;
const AuthScreen = styled.div(_t || (_t = _`
  height: 472px;
  width: 400px;
  background: #5484f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 52px;
    }

    p {
      font-weight: 300;
    }
  }
`));
const Container = styled.div(_t2 || (_t2 = _`
  display: flex;
  justify-content: center;
`));
const Frame = styled.div(_t3 || (_t3 = _`
  height: 400px;
  width: 400px;
  margin: 0;
  padding: 0;
  position: relative;

  > img {
    height: 100%;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  > div {
    height: 70px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;

    img {
      width: 107px;
      height: 55px;
      margin-left: 20px;
    }

    div {
      margin-left: 20px;

      span {
        font-weight: 300;
        font-size: 22px;
        color: #1f1f1f;
        display: block;
      }

      strong {
        font-weight: 700;
        font-size: 24px;
        color: #646060;
      }
    }
  }
`));
const ButtonContainer = styled.div(_t4 || (_t4 = _`
  width: 400px;
  display: flex;
  justify-content: space-between;
`));

let _$1 = t => t,
    _t$1;
const Container$1 = styled.button(_t$1 || (_t$1 = _$1`
  background: #5484f8;
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 195px;
  font-weight: 300;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${0};
  }
`), shade(0.2, '#5484f8'));

const Button = ({
  children,
  ...rest
}) => /*#__PURE__*/React.createElement(Container$1, Object.assign({
  type: "button"
}, rest), children);

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN
});

class ProfileMaster extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isSignedIn: false,
      downloadURL: ''
    };
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: () => false
      }
    };

    this.componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({
          isSignedIn: !!user
        });
      });
    };
  }

  download(dataUrl) {
    const element = document.createElement('a');
    element.setAttribute('href', dataUrl);
    element.setAttribute('download', 'profile-master.png');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  handleDownload() {
    html2canvas(document.getElementById('capture'), {
      useCORS: true,
      height: 400,
      width: 400,
      scrollY: -window.scrollY
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      this.download(imgData);
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(Container, {
      className: "App"
    }, this.state.isSignedIn ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Frame, {
      id: "capture"
    }, /*#__PURE__*/React.createElement("img", {
      src: firebase.auth().currentUser.photoURL,
      alt: "profile"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: Logo,
      alt: "Logo GDG Juiz de Fora"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, firebase.auth().currentUser.providerData[0].displayName), /*#__PURE__*/React.createElement("strong", null, "Embaixador")))), /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => this.handleDownload()
    }, "Download"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => firebase.auth().signOut()
    }, "Sign out!"))) : /*#__PURE__*/React.createElement(AuthScreen, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "ProfileMaster"), /*#__PURE__*/React.createElement("p", null, "Fa\xE7a a autentica\xE7\xE3o para obter sua moldura!")), /*#__PURE__*/React.createElement(StyledFirebaseAuth, {
      uiConfig: this.uiConfig,
      firebaseAuth: firebase.auth()
    })));
  }

}

let _$2 = t => t,
    _t$2;
var GlobalStyle = createGlobalStyle(_t$2 || (_t$2 = _$2`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`));

const ExampleComponent = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProfileMaster, null), /*#__PURE__*/React.createElement(GlobalStyle, null));
};

export default ExampleComponent;
//# sourceMappingURL=index.modern.js.map
