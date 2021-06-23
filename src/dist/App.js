"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// import DialogActions from "@material-ui/core/DialogActions";

// import Button from "@material-ui/core/Button";


exports.default = App;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dialog = require("@material-ui/core/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContentText = require("@material-ui/core/DialogContentText");

var _DialogContentText2 = _interopRequireDefault(_DialogContentText);

var _DialogContent = require("@material-ui/core/DialogContent");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DocumentUploadComponent = require("./DocumentUploadComponent");

var _DocumentUploadComponent2 = _interopRequireDefault(_DocumentUploadComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    return function () {
      console.log("Unmounted");
    };
  }, [state]);
  var closeModal = function closeModal() {
    setState(false);
    props.onButtonClick();
  };
  return _react2.default.createElement(
    "div",
    { stlye: {} },
    _react2.default.createElement(
      _Dialog2.default,
      { maxWidth: "md", open: state },
      _react2.default.createElement(
        _DialogContent2.default,
        null,
        _react2.default.createElement(
          _DialogContentText2.default,
          null,
          _react2.default.createElement(_DocumentUploadComponent2.default, _extends({}, props, { closeModal: closeModal }))
        )
      )
    )
  );
}