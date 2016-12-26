(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexActions = function () {
	function IndexActions() {
		_classCallCheck(this, IndexActions);

		this.generateActions('setDataList');
	}

	_createClass(IndexActions, [{
		key: 'getDataList',
		value: function getDataList() {
			var _this = this;

			fetch('http://cnodejs.org/api/v1/topics').then(function (response) {
				return response.json();
			}).then(function (data) {
				return _this.actions.setDataList(data);
			}).catch(function (e) {
				return console.log('报错啦', e);
			});
		}
	}]);

	return IndexActions;
}();

;
exports.default = _alt2.default.createActions(IndexActions);

},{"../alt":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
	function NavbarActions() {
		_classCallCheck(this, NavbarActions);

		this.generateActions('setPathname');
	}

	_createClass(NavbarActions, [{
		key: 'getPathname',
		value: function getPathname() {
			this.actions.setPathname(window.location.pathname);
		}
	}]);

	return NavbarActions;
}();

;
exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'flex-body' },
				_react2.default.createElement(_Navbar2.default, { history: this.props.history }),
				this.props.children,
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

;
exports.default = App;

},{"./Footer":6,"./Navbar":8,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Archive = function (_React$Component) {
	_inherits(Archive, _React$Component);

	function Archive() {
		_classCallCheck(this, Archive);

		return _possibleConstructorReturn(this, (Archive.__proto__ || Object.getPrototypeOf(Archive)).apply(this, arguments));
	}

	_createClass(Archive, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main-content alert alert-info' },
				'\u8FD9\u662F\u6863\u6848\u9875'
			);
		}
	}]);

	return Archive;
}(_react2.default.Component);

;
exports.default = Archive;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
	}

	_createClass(Footer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'flex-footer' },
				_react2.default.createElement(
					'div',
					{ className: 'page-scrollTop', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Top' },
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: 'javascript:;' },
						_react2.default.createElement('div', { className: 'arrow' }),
						_react2.default.createElement('div', { className: 'stick' })
					)
				),
				_react2.default.createElement(
					'footer',
					{ className: 'footnote footnote-vinson' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ className: 'foot-item', to: '/', target: '_blank' },
							_react2.default.createElement('span', { className: 'octicon octicon-mail' })
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ className: 'foot-item', to: '/', target: '_blank' },
							_react2.default.createElement('span', { className: 'octicon octicon-mark-github' })
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ className: 'foot-item', to: '/', target: '_blank' },
							_react2.default.createElement('span', { className: 'octicon octicon-rss' })
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ className: 'foot-item', to: '/', target: '_blank' },
							_react2.default.createElement('span', { className: 'octicon octicon-link-external' })
						),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/' },
							_react2.default.createElement(
								'span',
								{ className: 'word-keep' },
								' \xA9\u6708\u6842\u53F6'
							)
						)
					)
				)
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

;
exports.default = Footer;

},{"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _IndexStore = require('../stores/IndexStore');

var _IndexStore2 = _interopRequireDefault(_IndexStore);

var _IndexActions = require('../actions/IndexActions');

var _IndexActions2 = _interopRequireDefault(_IndexActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	function Index(props) {
		_classCallCheck(this, Index);

		var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

		_this.state = _IndexStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_IndexStore2.default.listen(this.onChange);
			_IndexActions2.default.getDataList();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_IndexStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var articles = this.state.dataList.map(function (item, index) {
				return _react2.default.createElement(
					'article',
					{ key: index },
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '#' },
							_react2.default.createElement('span', { className: 'octicon octicon-calendar' }),
							_react2.default.createElement(
								'span',
								null,
								item.create_at
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '#', className: 'title' },
							item.title
						),
						_react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: item.content } }),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '#', className: 'readmore' },
							'\u66F4\u591A'
						),
						_react2.default.createElement(
							'footer',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '#', className: 'word-keep' },
								_react2.default.createElement('span', { className: 'octicon octicon-tag' }),
								' \u6807\u7B7E\u4E00'
							),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '#', className: 'word-keep' },
								_react2.default.createElement('span', { className: 'octicon octicon-tag' }),
								' \u6807\u7B7E\u4E8C'
							),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '#', className: 'word-keep' },
								_react2.default.createElement('span', { className: 'octicon octicon-tag' }),
								' \u6807\u7B7E\u4E09'
							),
							_react2.default.createElement(
								'span',
								{ className: 'word-keep pull-right' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '#' },
									_react2.default.createElement('span', { className: 'octicon octicon-comment' }),
									' \u8BC4\u8BBA'
								),
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '#' },
									_react2.default.createElement('span', { className: 'octicon octicon-file-symlink-file' }),
									' \u5206\u4EAB'
								)
							)
						)
					)
				);
			});
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row index' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-10 col-sm-offset-1 col-lg-9 col-lg-offset-1_5' },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'section',
									{ className: 'category-slice' },
									articles
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Index;
}(_react2.default.Component);

;
exports.default = Index;

},{"../actions/IndexActions":1,"../stores/IndexStore":11,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar(props) {
		_classCallCheck(this, Navbar);

		var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

		_this.state = _NavbarStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Navbar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_NavbarStore2.default.listen(this.onChange);
			_NavbarActions2.default.getPathname();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_NavbarStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleLink',
		value: function handleLink(event) {
			_NavbarActions2.default.getPathname();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'header',
				null,
				_react2.default.createElement(
					'nav',
					{ className: 'navbar navbar-vinson rectangle', role: 'navigation' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement(
							'div',
							{ className: 'navbar-header' },
							_react2.default.createElement(
								'button',
								{ className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse', type: 'button' },
								_react2.default.createElement('span', { className: 'icon-bar' }),
								_react2.default.createElement('span', { className: 'icon-bar' }),
								_react2.default.createElement('span', { className: 'icon-bar' })
							),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/', className: 'navbar-brand' },
								' \u6708\u6842\u53F6\u7684\u535A\u5BA2'
							),
							_react2.default.createElement(
								'small',
								{ className: 'navbar-text' },
								' \u7231\u7F16\u7A0B\u7231\u751F\u6D3B'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'collapse navbar-collapse' },
							_react2.default.createElement(
								'ul',
								{ className: 'nav navbar-nav navbar-right', onClick: this.handleLink.bind(this) },
								_react2.default.createElement(
									'li',
									{ className: this.state.pathname == '/' ? 'active' : '' },
									_react2.default.createElement(
										_reactRouter.Link,
										{ className: 'word-keep', to: '/' },
										_react2.default.createElement('span', { className: 'octicon octicon-book' }),
										' \u535A\u6587'
									)
								),
								_react2.default.createElement(
									'li',
									{ className: this.state.pathname == '/archive' ? 'active' : '' },
									_react2.default.createElement(
										_reactRouter.Link,
										{ className: 'word-keep', to: '/archive' },
										_react2.default.createElement('span', { className: 'octicon octicon-repo' }),
										' \u6863\u6848'
									)
								),
								_react2.default.createElement(
									'li',
									{ className: this.state.pathname == '/category' ? 'active' : '' },
									_react2.default.createElement(
										_reactRouter.Link,
										{ className: 'word-keep', to: '/category' },
										_react2.default.createElement('span', { className: 'octicon octicon-list-unordered' }),
										' \u5206\u7C7B'
									)
								),
								_react2.default.createElement(
									'li',
									{ className: this.state.pathname == '/tag' ? 'active' : '' },
									_react2.default.createElement(
										_reactRouter.Link,
										{ className: 'word-keep', to: '/tag' },
										_react2.default.createElement('span', { className: 'octicon octicon-tag' }),
										' \u6807\u7B7E'
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '#stq=', className: 'search-button' },
										_react2.default.createElement('span', { className: 'octicon octicon-search' })
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Navbar;
}(_react2.default.Component);

;
exports.default = Navbar;

},{"../actions/NavbarActions":2,"../stores/NavbarStore":12,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":10,"history/lib/createBrowserHistory":22,"react":"react","react-dom":"react-dom","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Index = require('./components/Index');

var _Index2 = _interopRequireDefault(_Index);

var _Archive = require('./components/Archive');

var _Archive2 = _interopRequireDefault(_Archive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Route,
	{ component: _App2.default },
	_react2.default.createElement(_reactRouter.Route, { path: '/', component: _Index2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '/archive', component: _Archive2.default })
);

},{"./components/App":4,"./components/Archive":5,"./components/Index":7,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _IndexActions = require('../actions/IndexActions');

var _IndexActions2 = _interopRequireDefault(_IndexActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexStore = function () {
	function IndexStore() {
		_classCallCheck(this, IndexStore);

		this.bindActions(_IndexActions2.default);
		this.dataList = [];
	}

	_createClass(IndexStore, [{
		key: 'setDataList',
		value: function setDataList(data) {
			this.dataList = data.data;
		}
	}]);

	return IndexStore;
}();

;
exports.default = _alt2.default.createStore(IndexStore);

},{"../actions/IndexActions":1,"../alt":3}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
	function NavbarStore() {
		_classCallCheck(this, NavbarStore);

		this.bindActions(_NavbarActions2.default);
		this.pathname = '/';
	}

	_createClass(NavbarStore, [{
		key: 'setPathname',
		value: function setPathname(pathname) {
			this.pathname = pathname;
		}
	}]);

	return NavbarStore;
}();

;
exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":2,"../alt":3}],13:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],14:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":15,"./lib/keys.js":16}],15:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],16:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],17:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],19:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":13,"warning":30}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],22:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":17,"./DOMStateStorage":19,"./DOMUtils":20,"./ExecutionEnvironment":21,"./createDOMHistory":23,"./parsePath":28,"_process":13,"invariant":31}],23:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":20,"./ExecutionEnvironment":21,"./createHistory":24,"_process":13,"invariant":31}],24:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":17,"./AsyncUtils":18,"./createLocation":25,"./deprecate":26,"./parsePath":28,"./runTransitionHook":29,"deep-equal":14}],25:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":17,"./parsePath":28}],26:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],27:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],28:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":27,"_process":13,"warning":30}],29:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":13,"warning":30}],30:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":13}],31:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":13}]},{},[9])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8uNi4wLjJAYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXBwXFxhY3Rpb25zXFxJbmRleEFjdGlvbnMuanMiLCJhcHBcXGFjdGlvbnNcXE5hdmJhckFjdGlvbnMuanMiLCJhcHBcXGFsdC5qcyIsImFwcFxcY29tcG9uZW50c1xcQXBwLmpzIiwiYXBwXFxjb21wb25lbnRzXFxBcmNoaXZlLmpzIiwiYXBwXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJhcHBcXGNvbXBvbmVudHNcXEluZGV4LmpzIiwiYXBwXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJhcHBcXG1haW4uanMiLCJhcHBcXHJvdXRlcy5qcyIsImFwcFxcc3RvcmVzXFxJbmRleFN0b3JlLmpzIiwiYXBwXFxzdG9yZXNcXE5hdmJhclN0b3JlLmpzIiwibm9kZV9tb2R1bGVzLy4wLjExLjlAcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzLy4xLjAuMUBkZWVwLWVxdWFsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy4xLjAuMUBkZWVwLWVxdWFsL2xpYi9pc19hcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvLjEuMC4xQGRlZXAtZXF1YWwvbGliL2tleXMuanMiLCJub2RlX21vZHVsZXMvLjEuMTcuMEBoaXN0b3J5L2xpYi9BY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL0RPTVN0YXRlU3RvcmFnZS5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL0RPTVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXNcXC4xLjE3LjBAaGlzdG9yeVxcbGliXFxub2RlX21vZHVsZXNcXGhpc3RvcnlcXGxpYlxcY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvLjEuMTcuMEBoaXN0b3J5L2xpYi9jcmVhdGVET01IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvY3JlYXRlSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL2NyZWF0ZUxvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvZGVwcmVjYXRlLmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvZXh0cmFjdFBhdGguanMiLCJub2RlX21vZHVsZXMvLjEuMTcuMEBoaXN0b3J5L2xpYi9wYXJzZVBhdGguanMiLCJub2RlX21vZHVsZXMvLjEuMTcuMEBoaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qcyIsIm5vZGVfbW9kdWxlc1xcLjIuMS4wQHdhcm5pbmdcXG5vZGVfbW9kdWxlc1xcLjEuMTcuMEBoaXN0b3J5XFxub2RlX21vZHVsZXNcXHdhcm5pbmdcXGJyb3dzZXIuanMiLCJub2RlX21vZHVsZXNcXC4yLjIuMkBpbnZhcmlhbnRcXG5vZGVfbW9kdWxlc1xcLjEuMTcuMEBoaXN0b3J5XFxub2RlX21vZHVsZXNcXGludmFyaWFudFxcYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0lBQ00sWTtBQUNMLHlCQUFjO0FBQUE7O0FBQ2IsT0FBSyxlQUFMLENBQ0MsYUFERDtBQUdBOzs7O2dDQUNhO0FBQUE7O0FBQ2IsU0FBTSxrQ0FBTixFQUEwQyxJQUExQyxDQUErQztBQUFBLFdBQVksU0FBUyxJQUFULEVBQVo7QUFBQSxJQUEvQyxFQUNFLElBREYsQ0FDTztBQUFBLFdBQVEsTUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixJQUF6QixDQUFSO0FBQUEsSUFEUCxFQUVFLEtBRkYsQ0FFUTtBQUFBLFdBQUssUUFBUSxHQUFSLENBQVksS0FBWixFQUFtQixDQUFuQixDQUFMO0FBQUEsSUFG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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbmNsYXNzIEluZGV4QWN0aW9ucyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRlQWN0aW9ucyhcclxuXHRcdFx0J3NldERhdGFMaXN0J1xyXG5cdFx0KTtcclxuXHR9XHJcblx0Z2V0RGF0YUxpc3QoKSB7XHJcblx0XHRmZXRjaCgnaHR0cDovL2Nub2RlanMub3JnL2FwaS92MS90b3BpY3MnKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB0aGlzLmFjdGlvbnMuc2V0RGF0YUxpc3QoZGF0YSkpXHJcblx0XHRcdC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCfmiqXplJnllaYnLCBlKSlcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEluZGV4QWN0aW9ucyk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5cclxuY2xhc3MgTmF2YmFyQWN0aW9ucyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRlQWN0aW9ucyhcclxuXHRcdFx0J3NldFBhdGhuYW1lJ1xyXG5cdFx0KTtcclxuXHR9XHJcblx0Z2V0UGF0aG5hbWUoKSB7XHJcblx0XHR0aGlzLmFjdGlvbnMuc2V0UGF0aG5hbWUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKE5hdmJhckFjdGlvbnMpOyIsImltcG9ydCBBbHQgZnJvbSAnYWx0JztcclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFsdCgpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LWJvZHlcIj5cclxuXHRcdFx0XHQ8TmF2YmFyIGhpc3Rvcnk9eyB0aGlzLnByb3BzLmhpc3RvcnkgfSAvPlxyXG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcblx0XHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY2xhc3MgQXJjaGl2ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudCBhbGVydCBhbGVydC1pbmZvJz5cclxuXHRcdFx0XHTov5nmmK/moaPmoYjpobVcclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXJjaGl2ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LWZvb3RlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZS1zY3JvbGxUb3BcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiVG9wXCI+XHJcblx0XHRcdFx0XHQ8TGluayB0bz1cImphdmFzY3JpcHQ6O1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFycm93XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RpY2tcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3Rub3RlIGZvb3Rub3RlLXZpbnNvblwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiZm9vdC1pdGVtXCIgdG89XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLW1haWxcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiZm9vdC1pdGVtXCIgdG89XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLW1hcmstZ2l0aHViXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImZvb3QtaXRlbVwiIHRvPVwiL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1yc3NcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiZm9vdC1pdGVtXCIgdG89XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLWxpbmstZXh0ZXJuYWxcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwid29yZC1rZWVwXCI+ICZjb3B5O+aciOahguWPtjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mb290ZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEluZGV4U3RvcmUgZnJvbSAnLi4vc3RvcmVzL0luZGV4U3RvcmUnO1xyXG5pbXBvcnQgSW5kZXhBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvSW5kZXhBY3Rpb25zJztcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0gSW5kZXhTdG9yZS5nZXRTdGF0ZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRJbmRleFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcclxuXHRcdEluZGV4QWN0aW9ucy5nZXREYXRhTGlzdCgpO1xyXG5cdH1cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdEluZGV4U3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlKHN0YXRlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0dmFyIGFydGljbGVzID0gdGhpcy5zdGF0ZS5kYXRhTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiBcclxuXHRcdFx0PGFydGljbGUga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdDxMaW5rIHRvPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tY2FsZW5kYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuPntpdGVtLmNyZWF0ZV9hdH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9oZWFkZXI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2R1bGVcIj5cclxuXHRcdFx0XHRcdDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9MaW5rPlxyXG5cdFx0XHRcdFx0PHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uY29udGVudH19IC8+XHJcblx0XHRcdFx0XHQ8TGluayB0bz1cIiNcIiBjbGFzc05hbWU9XCJyZWFkbW9yZVwiPuabtOWkmjwvTGluaz5cclxuXHRcdFx0XHRcdDxmb290ZXI+XHJcblx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cIndvcmQta2VlcFwiPjxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi10YWdcIj48L3NwYW4+IOagh+etvuS4gDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgdG89XCIjXCIgY2xhc3NOYW1lPVwid29yZC1rZWVwXCI+PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLXRhZ1wiPjwvc3Bhbj4g5qCH562+5LqMPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayB0bz1cIiNcIiBjbGFzc05hbWU9XCJ3b3JkLWtlZXBcIj48c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tdGFnXCI+PC9zcGFuPiDmoIfnrb7kuIk8L0xpbms+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIndvcmQta2VlcCBwdWxsLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLWNvbW1lbnRcIj48L3NwYW4+IOivhOiuulxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tZmlsZS1zeW1saW5rLWZpbGVcIj48L3NwYW4+IOWIhuS6q1xyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9mb290ZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTAgY29sLXNtLW9mZnNldC0xIGNvbC1sZy05IGNvbC1sZy1vZmZzZXQtMV81XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhdGVnb3J5LXNsaWNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHthcnRpY2xlc31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBOYXZiYXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvTmF2YmFyU3RvcmUnO1xyXG5pbXBvcnQgTmF2YmFyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL05hdmJhckFjdGlvbnMnO1xyXG5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IE5hdmJhclN0b3JlLmdldFN0YXRlKCk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdE5hdmJhclN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcclxuXHRcdE5hdmJhckFjdGlvbnMuZ2V0UGF0aG5hbWUoKTtcclxuXHR9XHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHROYXZiYXJTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcclxuXHR9XHJcblx0b25DaGFuZ2Uoc3RhdGUpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG5cdH1cclxuXHRoYW5kbGVMaW5rKGV2ZW50KSB7XHJcblx0XHROYXZiYXJBY3Rpb25zLmdldFBhdGhuYW1lKCk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxoZWFkZXI+XHJcblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLXZpbnNvbiByZWN0YW5nbGVcIiByb2xlPVwibmF2aWdhdGlvblwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiIHR5cGU9XCJidXR0b25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj4g5pyI5qGC5Y+255qE5Y2a5a6iPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPiDniLHnvJbnqIvniLHnlJ/mtLs8L3NtYWxsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCIgb25DbGljaz17dGhpcy5oYW5kbGVMaW5rLmJpbmQodGhpcyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYXRobmFtZSA9PSAnLycgPyAnYWN0aXZlJyA6ICcnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwid29yZC1rZWVwXCIgdG89XCIvXCI+PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLWJvb2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+IOWNmuaWh1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYXRobmFtZSA9PSAnL2FyY2hpdmUnID8gJ2FjdGl2ZScgOiAnJ30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cIndvcmQta2VlcFwiIHRvPVwiL2FyY2hpdmVcIj48c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tcmVwb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj4g5qGj5qGIXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnBhdGhuYW1lID09ICcvY2F0ZWdvcnknID8gJ2FjdGl2ZScgOiAnJ30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cIndvcmQta2VlcFwiIHRvPVwiL2NhdGVnb3J5XCI+PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLWxpc3QtdW5vcmRlcmVkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPiDliIbnsbtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUucGF0aG5hbWUgPT0gJy90YWcnID8gJ2FjdGl2ZScgOiAnJ30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cIndvcmQta2VlcFwiIHRvPVwiL3RhZ1wiPjxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi10YWdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+IOagh+etvlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIiNzdHE9XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1zZWFyY2hcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0PC9oZWFkZXI+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeSc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxubGV0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvSW5kZXgnO1xyXG5pbXBvcnQgQXJjaGl2ZSBmcm9tICcuL2NvbXBvbmVudHMvQXJjaGl2ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcblx0PFJvdXRlIGNvbXBvbmVudD17QXBwfT5cclxuXHRcdDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0luZGV4fSAvPlxyXG5cdFx0PFJvdXRlIHBhdGg9Jy9hcmNoaXZlJyBjb21wb25lbnQ9e0FyY2hpdmV9IC8+XHJcblx0PC9Sb3V0ZT5cclxuKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbmltcG9ydCBJbmRleEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9JbmRleEFjdGlvbnMnO1xyXG5jbGFzcyBJbmRleFN0b3JlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYmluZEFjdGlvbnMoSW5kZXhBY3Rpb25zKTtcclxuXHRcdHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuXHR9XHJcblx0c2V0RGF0YUxpc3QoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhTGlzdCA9IGRhdGEuZGF0YTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShJbmRleFN0b3JlKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbmltcG9ydCBOYXZiYXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvTmF2YmFyQWN0aW9ucyc7XHJcblxyXG5jbGFzcyBOYXZiYXJTdG9yZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmJpbmRBY3Rpb25zKE5hdmJhckFjdGlvbnMpO1xyXG5cdFx0dGhpcy5wYXRobmFtZSA9ICcvJztcclxuXHR9XHJcblx0c2V0UGF0aG5hbWUocGF0aG5hbWUpIHtcclxuXHRcdHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShOYXZiYXJTdG9yZSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG4iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nXG4gID8gT2JqZWN0LmtleXMgOiBzaGltO1xuXG5leHBvcnRzLnNoaW0gPSBzaGltO1xuZnVuY3Rpb24gc2hpbSAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsIi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnB1c2guXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBQVVNIID0gJ1BVU0gnO1xuXG5leHBvcnRzLlBVU0ggPSBQVVNIO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAqL1xudmFyIFJFUExBQ0UgPSAnUkVQTEFDRSc7XG5cbmV4cG9ydHMuUkVQTEFDRSA9IFJFUExBQ0U7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBzb21lIG90aGVyIGFjdGlvbiBzdWNoXG4gKiBhcyB1c2luZyBhIGJyb3dzZXIncyBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhbmQvb3IgbWFudWFsbHkgbWFuaXB1bGF0aW5nXG4gKiB0aGUgVVJMIGluIGEgYnJvd3NlcidzIGxvY2F0aW9uIGJhci4gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0V2ZW50SGFuZGxlcnMvb25wb3BzdGF0ZVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbnZhciBQT1AgPSAnUE9QJztcblxuZXhwb3J0cy5QT1AgPSBQT1A7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIFBVU0g6IFBVU0gsXG4gIFJFUExBQ0U6IFJFUExBQ0UsXG4gIFBPUDogUE9QXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMDtcbiAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPCB0dXJucykge1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufSIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuZXhwb3J0cy5yZWFkU3RhdGUgPSByZWFkU3RhdGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG52YXIgUXVvdGFFeGNlZWRlZEVycm9yID0gJ1F1b3RhRXhjZWVkZWRFcnJvcic7XG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB0cnkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlcnJvci5uYW1lID09PSBRdW90YUV4Y2VlZGVkRXJyb3IgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gU2FmYXJpIFwicHJpdmF0ZSBtb2RlXCIgdGhyb3dzIFF1b3RhRXhjZWVkZWRFcnJvci5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmkgcHJpdmF0ZSBtb2RlJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gIHZhciBqc29uID0gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byByZWFkIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0SGFzaFBhdGggPSBnZXRIYXNoUGF0aDtcbmV4cG9ydHMucmVwbGFjZUhhc2hQYXRoID0gcmVwbGFjZUhhc2hQYXRoO1xuZXhwb3J0cy5nZXRXaW5kb3dQYXRoID0gZ2V0V2luZG93UGF0aDtcbmV4cG9ydHMuZ28gPSBnbztcbmV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IGdldFVzZXJDb25maXJtYXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbmV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaDtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dQYXRoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufVxuXG5mdW5jdGlvbiBnbyhuKSB7XG4gIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEZJWE1FOiBXb3JrIGFyb3VuZCBvdXIgYnJvd3NlciBoaXN0b3J5IG5vdCB3b3JraW5nIGNvcnJlY3RseSBvbiBDaHJvbWVcbiAgLy8gaU9TOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy8yNTY1XG4gIGlmICh1YS5pbmRleE9mKCdDcmlPUycpICE9PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyBIVE1MNSdzIGhpc3RvcnkgQVBJXG4gKiAocHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQpIHRvIG1hbmFnZSBoaXN0b3J5LlxuICogVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kIG9mIG1hbmFnaW5nIGhpc3RvcnkgaW4gYnJvd3NlcnMgYmVjYXVzZVxuICogaXQgcHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKlxuICogTm90ZTogSW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgZnVsbFxuICogcGFnZSByZWxvYWRzIHdpbGwgYmUgdXNlZCB0byBwcmVzZXJ2ZSBVUkxzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgZm9yY2VSZWZyZXNoID0gb3B0aW9ucy5mb3JjZVJlZnJlc2g7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgdXNlUmVmcmVzaCA9ICFpc1N1cHBvcnRlZCB8fCBmb3JjZVJlZnJlc2g7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIGhpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZSB8fCB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcblxuICAgIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldFdpbmRvd1BhdGgoKTtcbiAgICB2YXIgX2hpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZTtcbiAgICB2YXIga2V5ID0gX2hpc3RvcnlTdGF0ZS5rZXk7XG5cbiAgICB2YXIgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGtleSkge1xuICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuXG4gICAgICBpZiAoaXNTdXBwb3J0ZWQpIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShfZXh0ZW5kcyh7fSwgaGlzdG9yeVN0YXRlLCB7IGtleToga2V5IH0pLCBudWxsLCBwYXRoKTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24oX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBzdGF0ZSB9KSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB2YXIgaGlzdG9yeVN0YXRlID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSRVBMQUNFXG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgaGlzdG9yeS5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuXG4gICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2tcbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUhpc3Rvcnkob3B0aW9ucykge1xuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVIaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfRE9NVXRpbHMuZ2V0VXNlckNvbmZpcm1hdGlvblxuICB9LCBvcHRpb25zLCB7XG4gICAgZ286IF9ET01VdGlscy5nb1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoJ2RlZXAtZXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9Bc3luY1V0aWxzID0gcmVxdWlyZSgnLi9Bc3luY1V0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IHJlcXVpcmUoJy4vY3JlYXRlTG9jYXRpb24nKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVMb2NhdGlvbjIpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleShsZW5ndGgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxuICAvL2EuYWN0aW9uID09PSBiLmFjdGlvbiAmJiAvLyBEaWZmZXJlbnQgYWN0aW9uICE9PSBsb2NhdGlvbiBjaGFuZ2UuXG4gIGEua2V5ID09PSBiLmtleSAmJiBfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG52YXIgRGVmYXVsdEtleUxlbmd0aCA9IDY7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGZpbmlzaFRyYW5zaXRpb24gPSBvcHRpb25zLmZpbmlzaFRyYW5zaXRpb247XG4gIHZhciBzYXZlU3RhdGUgPSBvcHRpb25zLnNhdmVTdGF0ZTtcbiAgdmFyIGdvID0gb3B0aW9ucy5nbztcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcblxuICBpZiAodHlwZW9mIGtleUxlbmd0aCAhPT0gJ251bWJlcicpIGtleUxlbmd0aCA9IERlZmF1bHRLZXlMZW5ndGg7XG5cbiAgdmFyIHRyYW5zaXRpb25Ib29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWxsS2V5cyA9IFtdO1xuICB2YXIgY2hhbmdlTGlzdGVuZXJzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgIGFsbEtleXMgPSBbX2xvY2F0aW9uLmtleV07XG4gICAgICB1cGRhdGVMb2NhdGlvbihfbG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VMaXN0ZW5lcnMgPSBjaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgIF9Bc3luY1V0aWxzLmxvb3BBc3luYyh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXSh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHBlbmRpbmdMb2NhdGlvbiA9IG5leHRMb2NhdGlvbjtcblxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG8obmV4dExvY2F0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChwZW5kaW5nTG9jYXRpb24gIT09IG5leHRMb2NhdGlvbikgcmV0dXJuOyAvLyBUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIC8vIHRyZWF0IFBVU0ggdG8gY3VycmVudCBwYXRoIGxpa2UgUkVQTEFDRSB0byBiZSBjb25zaXN0ZW50IHdpdGggYnJvd3NlcnNcbiAgICAgICAgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgICAgICB2YXIgcHJldlBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgICAgICB2YXIgbmV4dFBhdGggPSBjcmVhdGVQYXRoKG5leHRMb2NhdGlvbik7XG5cbiAgICAgICAgICBpZiAobmV4dFBhdGggPT09IHByZXZQYXRoKSBuZXh0TG9jYXRpb24uYWN0aW9uID0gX0FjdGlvbnMuUkVQTEFDRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaW5pc2hUcmFuc2l0aW9uKG5leHRMb2NhdGlvbikgIT09IGZhbHNlKSB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiAmJiBuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gYWxsS2V5cy5pbmRleE9mKG5leHRMb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xICYmIG5leHRJbmRleCAhPT0gLTEpIGdvKHByZXZJbmRleCAtIG5leHRJbmRleCk7IC8vIFJlc3RvcmUgdGhlIFVSTC5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICB0cmFuc2l0aW9uVG8oY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlBVU0gsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5SRVBMQUNFLCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmFuZG9tS2V5KGtleUxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uID09IG51bGwgfHwgdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIGxvY2F0aW9uO1xuXG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cbiAgICB2YXIgcmVzdWx0ID0gcGF0aG5hbWU7XG5cbiAgICBpZiAoc2VhcmNoKSByZXN1bHQgKz0gc2VhcmNoO1xuXG4gICAgaWYgKGhhc2gpIHJlc3VsdCArPSBoYXNoO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgYWN0aW9uKSB7XG4gICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IGNyZWF0ZUtleSgpIDogYXJndW1lbnRzWzJdO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAvL3dhcm5pbmcoXG4gICAgICAvLyAgZmFsc2UsXG4gICAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgICAgLy8gICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnXG4gICAgICAvLylcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICAgIGFjdGlvbiA9IGtleTtcbiAgICAgIGtleSA9IGFyZ3VtZW50c1szXSB8fCBjcmVhdGVLZXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NyZWF0ZUxvY2F0aW9uM1snZGVmYXVsdCddKGxvY2F0aW9uLCBhY3Rpb24sIGtleSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUoZ2V0Q3VycmVudExvY2F0aW9uKCksIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSkge1xuICAgIGxvY2F0aW9uLnN0YXRlID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLnN0YXRlLCBzdGF0ZSk7XG4gICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICB2YXIgbG9jYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBfQWN0aW9ucy5QT1AgOiBhcmd1bWVudHNbMV07XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gIHZhciBfZm91cnRoQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKGxvY2F0aW9uKTtcblxuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAvL3dhcm5pbmcoXG4gICAgLy8gIGZhbHNlLFxuICAgIC8vICAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgIC8vKVxuXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgIGFjdGlvbiA9IGtleSB8fCBfQWN0aW9ucy5QT1A7XG4gICAga2V5ID0gX2ZvdXJ0aEFyZztcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoIHx8ICcnO1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSB8fCBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZShmbikge1xuICByZXR1cm4gZm47XG4gIC8vcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgLy8gIHdhcm5pbmcoZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpXG4gIC8vICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAvL31cbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZXh0cmFjdFBhdGgoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHRyYWN0UGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2V4dHJhY3RQYXRoID0gcmVxdWlyZSgnLi9leHRyYWN0UGF0aCcpO1xuXG52YXIgX2V4dHJhY3RQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dHJhY3RQYXRoKTtcblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gX2V4dHJhY3RQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHBhdGggPT09IHBhdGhuYW1lLCAnQSBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoIG9ubHksIG5vdCBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgbGlrZSBcIiVzXCInLCBwYXRoKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcnKSBwYXRobmFtZSA9ICcvJztcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBhcnNlUGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2soaG9vaywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBob29rKGxvY2F0aW9uLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgIC8vIEFzc3VtZSB0aGUgaG9vayBydW5zIHN5bmNocm9ub3VzbHkgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocmVzdWx0ID09PSB1bmRlZmluZWQsICdZb3Ugc2hvdWxkIG5vdCBcInJldHVyblwiIGluIGEgdHJhbnNpdGlvbiBob29rIHdpdGggYSBjYWxsYmFjayBhcmd1bWVudDsgY2FsbCB0aGUgY2FsbGJhY2sgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJ1blRyYW5zaXRpb25Ib29rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIl19