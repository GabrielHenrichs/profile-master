function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var firebase = _interopDefault(require('firebase'));
var StyledFirebaseAuth = _interopDefault(require('react-firebaseui/StyledFirebaseAuth'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var Logo = _interopDefault(require('./logo~rUsjTWbd.png'));
var html2canvas = _interopDefault(require('html2canvas'));
var polished = require('polished');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 400px;\n  width: 400px;\n  margin: 0;\n  padding: 0;\n  position: relative;\n\n  > img {\n    height: 100%;\n    width: 100%;\n    height: auto;\n    margin: 0;\n    padding: 0;\n  }\n\n  > div {\n    height: 70px;\n    background: rgba(255, 255, 255, 0.8);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 107px;\n      height: 55px;\n      margin-left: 20px;\n    }\n\n    div {\n      margin-left: 20px;\n\n      span {\n        font-weight: 300;\n        font-size: 22px;\n        color: #1f1f1f;\n        display: block;\n      }\n\n      strong {\n        font-weight: 700;\n        font-size: 24px;\n        color: #646060;\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 472px;\n  width: 400px;\n  background: #5484f8;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  color: #fff;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    h1 {\n      margin-bottom: 20px;\n      font-weight: 700;\n      font-size: 52px;\n    }\n\n    p {\n      font-weight: 300;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var AuthScreen = styled__default.div(_templateObject());
var Container = styled__default.div(_templateObject2());
var Frame = styled__default.div(_templateObject3());
var ButtonContainer = styled__default.div(_templateObject4());

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #5484f8;\n  height: 56px;\n  border: 0;\n  padding: 0 16px;\n  color: #fff;\n  width: 195px;\n  font-weight: 300;\n  margin-top: 16px;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled__default.button(_templateObject$1(), polished.shade(0.2, '#5484f8'));

var Button = function Button(_ref) {
  var children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/React__default.createElement(Container$1, _extends({
    type: "button"
  }, rest), children);
};

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN
});

var ProfileMaster = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ProfileMaster, _Component);

  function ProfileMaster() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isSignedIn: false,
      downloadURL: ''
    };
    _this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: function signInSuccess() {
          return false;
        }
      }
    };

    _this.componentDidMount = function () {
      firebase.auth().onAuthStateChanged(function (user) {
        _this.setState({
          isSignedIn: !!user
        });
      });
    };

    return _this;
  }

  var _proto = ProfileMaster.prototype;

  _proto.download = function download(dataUrl) {
    var element = document.createElement('a');
    element.setAttribute('href', dataUrl);
    element.setAttribute('download', 'profile-master.png');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  _proto.handleDownload = function handleDownload() {
    var _this2 = this;

    html2canvas(document.getElementById('capture'), {
      useCORS: true,
      height: 400,
      width: 400,
      scrollY: -window.scrollY
    }).then(function (canvas) {
      var imgData = canvas.toDataURL('image/png');

      _this2.download(imgData);
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    return /*#__PURE__*/React__default.createElement(Container, {
      className: "App"
    }, this.state.isSignedIn ? /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(Frame, {
      id: "capture"
    }, /*#__PURE__*/React__default.createElement("img", {
      src: firebase.auth().currentUser.photoURL,
      alt: "profile"
    }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
      src: Logo,
      alt: "Logo GDG Juiz de Fora"
    }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("span", null, firebase.auth().currentUser.providerData[0].displayName), /*#__PURE__*/React__default.createElement("strong", null, "Embaixador")))), /*#__PURE__*/React__default.createElement(ButtonContainer, null, /*#__PURE__*/React__default.createElement(Button, {
      onClick: function onClick() {
        return _this3.handleDownload();
      }
    }, "Download"), /*#__PURE__*/React__default.createElement(Button, {
      onClick: function onClick() {
        return firebase.auth().signOut();
      }
    }, "Sign out!"))) : /*#__PURE__*/React__default.createElement(AuthScreen, null, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h1", null, "ProfileMaster"), /*#__PURE__*/React__default.createElement("p", null, "Fa\xE7a a autentica\xE7\xE3o para obter sua moldura!")), /*#__PURE__*/React__default.createElement(StyledFirebaseAuth, {
      uiConfig: this.uiConfig,
      firebaseAuth: firebase.auth()
    })));
  };

  return ProfileMaster;
}(React.Component);

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        -webkit-font-smoothing: antialiased;\n    }\n\n    body, input, button {\n        font: 16px Roboto, sans-serif;\n    }\n\n    #root {\n        max-width: 960px;\n        margin: 0 auto;\n        padding: 40px 20px;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = styled.createGlobalStyle(_templateObject$2());

var ExampleComponent = function ExampleComponent() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(ProfileMaster, null), /*#__PURE__*/React__default.createElement(GlobalStyle, null));
};

module.exports = ExampleComponent;
//# sourceMappingURL=index.js.map
