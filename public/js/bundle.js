(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Tool = {};
Tool.formatDate = function (str) {
	var date = new Date(str);
	var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	return dateString;
};
exports.default = Tool;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArchiveActions = function () {
	function ArchiveActions() {
		_classCallCheck(this, ArchiveActions);

		this.generateActions("setDataList");
	}

	_createClass(ArchiveActions, [{
		key: 'getDataList',
		value: function getDataList() {
			var _this = this;

			fetch('https://cnodejs.org/api/v1/topics').then(function (response) {
				return response.json();
			}).then(function (data) {
				return _this.actions.setDataList(data);
			}).catch(function (e) {
				return console.log('报错啦', e);
			});
		}
	}]);

	return ArchiveActions;
}();

exports.default = _alt2.default.createActions(ArchiveActions);

},{"../alt":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentActions = function () {
	function ContentActions() {
		_classCallCheck(this, ContentActions);

		this.generateActions("setContentData");
	}

	_createClass(ContentActions, [{
		key: 'getDataList',
		value: function getDataList(id) {
			var _this = this;

			fetch('https://cnodejs.org/api/v1/topic/' + id).then(function (response) {
				return response.json();
			}).then(function (data) {
				return _this.actions.setContentData(data);
			}).catch(function (e) {
				return console.log('报错啦', e);
			});
		}
	}]);

	return ContentActions;
}();

exports.default = _alt2.default.createActions(ContentActions);

},{"../alt":6}],4:[function(require,module,exports){
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

			fetch('https://cnodejs.org/api/v1/topics?tab=good').then(function (response) {
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

},{"../alt":6}],5:[function(require,module,exports){
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

},{"../alt":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],7:[function(require,module,exports){
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

},{"./Footer":10,"./Navbar":12,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Tool = require('../Tool');

var _Tool2 = _interopRequireDefault(_Tool);

var _ArchiveStore = require('../stores/ArchiveStore');

var _ArchiveStore2 = _interopRequireDefault(_ArchiveStore);

var _ArchiveActions = require('../actions/ArchiveActions');

var _ArchiveActions2 = _interopRequireDefault(_ArchiveActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Archive = function (_React$Component) {
	_inherits(Archive, _React$Component);

	function Archive(props) {
		_classCallCheck(this, Archive);

		var _this = _possibleConstructorReturn(this, (Archive.__proto__ || Object.getPrototypeOf(Archive)).call(this, props));

		_this.state = _ArchiveStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Archive, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_ArchiveStore2.default.listen(this.onChange);
			_ArchiveActions2.default.getDataList();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_ArchiveStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var Archives = this.state.dataList.map(function (item, index) {
				return _react2.default.createElement(
					'div',
					{ className: 'cd-timeline-block', key: item.id },
					_react2.default.createElement(
						'div',
						{ className: 'cd-timeline-img cd-picture' },
						_react2.default.createElement('img', { src: '/images/icon-picture.svg', alt: 'Picture' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'cd-timeline-content' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/article/" + item.id },
							_react2.default.createElement(
								'h4',
								null,
								item.title
							)
						),
						_react2.default.createElement(
							'span',
							{ className: 'cd-date' },
							_Tool2.default.formatDate(item.create_at)
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
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'sheet' },
							_react2.default.createElement(
								'header',
								null,
								_react2.default.createElement(
									'h1',
									null,
									'\u6863\u6848'
								)
							),
							_react2.default.createElement('hr', { className: 'boundary' }),
							_react2.default.createElement(
								'article',
								null,
								_react2.default.createElement(
									'section',
									{ id: 'cd-timeline', className: 'cd-container' },
									Archives
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Archive;
}(_react2.default.Component);

;
exports.default = Archive;

},{"../Tool":1,"../actions/ArchiveActions":2,"../stores/ArchiveStore":15,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Tool = require('../Tool');

var _Tool2 = _interopRequireDefault(_Tool);

var _ContentStore = require('../stores/ContentStore');

var _ContentStore2 = _interopRequireDefault(_ContentStore);

var _ContentActions = require('../actions/ContentActions');

var _ContentActions2 = _interopRequireDefault(_ContentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
	_inherits(Content, _React$Component);

	function Content(props) {
		_classCallCheck(this, Content);

		var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

		_this.state = _ContentStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Content, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_ContentStore2.default.listen(this.onChange);
			_ContentActions2.default.getDataList(this.props.params.id);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_ContentStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'main' },
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'content col-lg-9' },
							_react2.default.createElement(
								'div',
								{ className: 'sheet post' },
								_react2.default.createElement(
									'header',
									null,
									_react2.default.createElement(
										'h2',
										null,
										this.state.contentData.title
									),
									_react2.default.createElement(
										'p',
										{ className: 'post-meta' },
										_react2.default.createElement('span', { className: 'octicon octicon-clock' }),
										'\xA0',
										_react2.default.createElement(
											'span',
											null,
											_Tool2.default.formatDate(this.state.contentData.create_at)
										)
									),
									_react2.default.createElement(
										'p',
										{ className: 'post-tag' },
										_react2.default.createElement(
											'span',
											null,
											_react2.default.createElement(
												_reactRouter.Link,
												{ to: '/' },
												_react2.default.createElement(
													'span',
													{ className: 'octicon octicon-tag' },
													'\u6807\u7B7E'
												)
											)
										)
									)
								),
								_react2.default.createElement('hr', { className: 'boundary' }),
								_react2.default.createElement('article', { dangerouslySetInnerHTML: { __html: this.state.contentData.content } }),
								_react2.default.createElement(
									'div',
									{ id: 'post-share', className: 'bdsharebuttonbox' },
									_react2.default.createElement(_reactRouter.Link, { to: '/', className: 'bds_more', 'data-cmd': 'more' }),
									_react2.default.createElement(_reactRouter.Link, { to: '/', className: 'bds_tsina', 'data-cmd': 'tsina', title: '\u5206\u4EAB\u5230\u65B0\u6D6A\u5FAE\u535A' }),
									_react2.default.createElement(_reactRouter.Link, { to: '/', className: 'bds_weixin', 'data-cmd': 'weixin', title: '\u5206\u4EAB\u5230\u5FAE\u4FE1' }),
									_react2.default.createElement(_reactRouter.Link, { to: '/', className: 'bds_douban', 'data-cmd': 'douban', title: '\u5206\u4EAB\u5230\u8C46\u74E3\u7F51' }),
									_react2.default.createElement(_reactRouter.Link, { to: '/', className: 'bds_fbook', 'data-cmd': 'fbook', title: '\u5206\u4EAB\u5230Facebook' }),
									_react2.default.createElement(_reactRouter.Link, { to: '/', className: 'bds_copy', 'data-cmd': 'copy', title: '\u5206\u4EAB\u5230\u590D\u5236\u7F51\u5740' })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'content-navigation col-lg-3' },
							_react2.default.createElement(
								'div',
								{ className: 'shadow-bottom-center' },
								_react2.default.createElement(
									'div',
									{ className: 'content-navigation-toc' },
									_react2.default.createElement(
										'div',
										{ className: 'content-navigation-header' },
										_react2.default.createElement('span', { className: 'octicon octicon-list-unordered' }),
										'\xA0Toc'
									),
									_react2.default.createElement(
										'div',
										{ className: 'content-navigation-list toc' },
										_react2.default.createElement(
											'ul',
											null,
											_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
													_reactRouter.Link,
													{ to: '/', id: 'markdown-toc-section1' },
													'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
												)
											),
											_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
													_reactRouter.Link,
													{ to: '/', id: 'markdown-toc-section2' },
													'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
												)
											),
											_react2.default.createElement(
												'li',
												null,
												_react2.default.createElement(
													_reactRouter.Link,
													{ to: '/', id: 'markdown-toc-section3' },
													'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
												)
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'content-navigation-tag' },
									_react2.default.createElement(
										'div',
										{ className: 'content-navigation-toc' },
										_react2.default.createElement(
											'div',
											{ className: 'content-navigation-header' },
											_react2.default.createElement('span', { className: 'octicon octicon-list-unordered' }),
											'\xA0Toc'
										),
										_react2.default.createElement(
											'div',
											{ className: 'content-navigation-list toc' },
											_react2.default.createElement(
												'ul',
												null,
												_react2.default.createElement(
													'li',
													null,
													_react2.default.createElement(
														_reactRouter.Link,
														{ to: '/', id: 'markdown-toc-section1' },
														'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
													)
												),
												_react2.default.createElement(
													'li',
													null,
													_react2.default.createElement(
														_reactRouter.Link,
														{ to: '/', id: 'markdown-toc-section2' },
														'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
													)
												),
												_react2.default.createElement(
													'li',
													null,
													_react2.default.createElement(
														_reactRouter.Link,
														{ to: '/', id: 'markdown-toc-section3' },
														'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
													)
												)
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'content-navigation-related' },
									_react2.default.createElement(
										'div',
										{ className: 'content-navigation-toc' },
										_react2.default.createElement(
											'div',
											{ className: 'content-navigation-header' },
											_react2.default.createElement('span', { className: 'octicon octicon-list-unordered' }),
											'\xA0Related'
										),
										_react2.default.createElement(
											'div',
											{ className: 'content-navigation-list toc' },
											_react2.default.createElement(
												'ul',
												null,
												_react2.default.createElement(
													'li',
													null,
													_react2.default.createElement(
														_reactRouter.Link,
														{ to: '/', id: 'markdown-toc-section1' },
														'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
													)
												),
												_react2.default.createElement(
													'li',
													null,
													_react2.default.createElement(
														_reactRouter.Link,
														{ to: '/', id: 'markdown-toc-section2' },
														'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
													)
												),
												_react2.default.createElement(
													'li',
													null,
													_react2.default.createElement(
														_reactRouter.Link,
														{ to: '/', id: 'markdown-toc-section3' },
														'\u8BCD\u6CD5\u4F5C\u7528\u57DF'
													)
												)
											)
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Content;
}(_react2.default.Component);

;
exports.default = Content;

},{"../Tool":1,"../actions/ContentActions":3,"../stores/ContentStore":16,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Tool = require('../Tool');

var _Tool2 = _interopRequireDefault(_Tool);

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
					{ key: item.id },
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/article/" + item.id },
							_react2.default.createElement('span', { className: 'octicon octicon-calendar' }),
							_react2.default.createElement(
								'span',
								null,
								_Tool2.default.formatDate(item.create_at)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'module' },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/article/" + item.id, className: 'title' },
							item.title
						),
						_react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: item.content } }),
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/article/" + item.id, className: 'readmore' },
							'\u8BE6\u60C5'
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

},{"../Tool":1,"../actions/IndexActions":4,"../stores/IndexStore":17,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
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

},{"../actions/NavbarActions":5,"../stores/NavbarStore":18,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
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

},{"./routes":14,"history/lib/createBrowserHistory":28,"react":"react","react-dom":"react-dom","react-router":"react-router"}],14:[function(require,module,exports){
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

var _Content = require('./components/Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Route,
	{ component: _App2.default },
	_react2.default.createElement(_reactRouter.Route, { path: '/', component: _Index2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '/archive', component: _Archive2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '/article/:id', component: _Content2.default })
);

},{"./components/App":7,"./components/Archive":8,"./components/Content":9,"./components/Index":11,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ArchiveActions = require('../actions/ArchiveActions');

var _ArchiveActions2 = _interopRequireDefault(_ArchiveActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArchiveStore = function () {
	function ArchiveStore() {
		_classCallCheck(this, ArchiveStore);

		this.bindActions(_ArchiveActions2.default);
		this.dataList = [];
	}

	_createClass(ArchiveStore, [{
		key: 'setDataList',
		value: function setDataList(data) {
			this.dataList = data.data;
		}
	}]);

	return ArchiveStore;
}();

;
exports.default = _alt2.default.createStore(ArchiveStore);

},{"../actions/ArchiveActions":2,"../alt":6}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ContentActions = require('../actions/ContentActions');

var _ContentActions2 = _interopRequireDefault(_ContentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentStore = function () {
	function ContentStore() {
		_classCallCheck(this, ContentStore);

		this.bindActions(_ContentActions2.default);
		this.contentData = {};
	}

	_createClass(ContentStore, [{
		key: 'setContentData',
		value: function setContentData(data) {
			this.contentData = data.data;
		}
	}]);

	return ContentStore;
}();

;
exports.default = _alt2.default.createStore(ContentStore);

},{"../actions/ContentActions":3,"../alt":6}],17:[function(require,module,exports){
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

},{"../actions/IndexActions":4,"../alt":6}],18:[function(require,module,exports){
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

},{"../actions/NavbarActions":5,"../alt":6}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"./lib/is_arguments.js":21,"./lib/keys.js":22}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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

},{"_process":19,"warning":36}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],28:[function(require,module,exports){
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

},{"./Actions":23,"./DOMStateStorage":25,"./DOMUtils":26,"./ExecutionEnvironment":27,"./createDOMHistory":29,"./parsePath":34,"_process":19,"invariant":37}],29:[function(require,module,exports){
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

},{"./DOMUtils":26,"./ExecutionEnvironment":27,"./createHistory":30,"_process":19,"invariant":37}],30:[function(require,module,exports){
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
},{"./Actions":23,"./AsyncUtils":24,"./createLocation":31,"./deprecate":32,"./parsePath":34,"./runTransitionHook":35,"deep-equal":20}],31:[function(require,module,exports){
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
},{"./Actions":23,"./parsePath":34}],32:[function(require,module,exports){
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
},{}],33:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],34:[function(require,module,exports){
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

},{"./extractPath":33,"_process":19,"warning":36}],35:[function(require,module,exports){
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

},{"_process":19,"warning":36}],36:[function(require,module,exports){
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

},{"_process":19}],37:[function(require,module,exports){
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

},{"_process":19}]},{},[13])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8uNi4wLjJAYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXBwXFxUb29sLmpzIiwiYXBwXFxhY3Rpb25zXFxBcmNoaXZlQWN0aW9ucy5qcyIsImFwcFxcYWN0aW9uc1xcQ29udGVudEFjdGlvbnMuanMiLCJhcHBcXGFjdGlvbnNcXEluZGV4QWN0aW9ucy5qcyIsImFwcFxcYWN0aW9uc1xcTmF2YmFyQWN0aW9ucy5qcyIsImFwcFxcYWx0LmpzIiwiYXBwXFxjb21wb25lbnRzXFxBcHAuanMiLCJhcHBcXGNvbXBvbmVudHNcXEFyY2hpdmUuanMiLCJhcHBcXGNvbXBvbmVudHNcXENvbnRlbnQuanMiLCJhcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsImFwcFxcY29tcG9uZW50c1xcSW5kZXguanMiLCJhcHBcXGNvbXBvbmVudHNcXE5hdmJhci5qcyIsImFwcFxcbWFpbi5qcyIsImFwcFxccm91dGVzLmpzIiwiYXBwXFxzdG9yZXNcXEFyY2hpdmVTdG9yZS5qcyIsImFwcFxcc3RvcmVzXFxDb250ZW50U3RvcmUuanMiLCJhcHBcXHN0b3Jlc1xcSW5kZXhTdG9yZS5qcyIsImFwcFxcc3RvcmVzXFxOYXZiYXJTdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy8uMC4xMS45QHByb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy8uMS4wLjFAZGVlcC1lcXVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8uMS4wLjFAZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzLy4xLjAuMUBkZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL0FzeW5jVXRpbHMuanMiLCJub2RlX21vZHVsZXMvLjEuMTcuMEBoaXN0b3J5L2xpYi9ET01TdGF0ZVN0b3JhZ2UuanMiLCJub2RlX21vZHVsZXMvLjEuMTcuMEBoaXN0b3J5L2xpYi9ET01VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzXFwuMS4xNy4wQGhpc3RvcnlcXGxpYlxcbm9kZV9tb2R1bGVzXFxoaXN0b3J5XFxsaWJcXGNyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvY3JlYXRlRE9NSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL2NyZWF0ZUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvLjEuMTcuMEBoaXN0b3J5L2xpYi9jcmVhdGVMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL2RlcHJlY2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy8uMS4xNy4wQGhpc3RvcnkvbGliL2V4dHJhY3RQYXRoLmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvcGFyc2VQYXRoLmpzIiwibm9kZV9tb2R1bGVzLy4xLjE3LjBAaGlzdG9yeS9saWIvcnVuVHJhbnNpdGlvbkhvb2suanMiLCJub2RlX21vZHVsZXNcXC4yLjEuMEB3YXJuaW5nXFxub2RlX21vZHVsZXNcXC4xLjE3LjBAaGlzdG9yeVxcbm9kZV9tb2R1bGVzXFx3YXJuaW5nXFxicm93c2VyLmpzIiwibm9kZV9tb2R1bGVzXFwuMi4yLjJAaW52YXJpYW50XFxub2RlX21vZHVsZXNcXC4xLjE3LjBAaGlzdG9yeVxcbm9kZV9tb2R1bGVzXFxpbnZhcmlhbnRcXGJyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQU0sT0FBTyxFQUFiO0FBQ0EsS0FBSyxVQUFMLEdBQWtCLFVBQVMsR0FBVCxFQUFjO0FBQy9CLEtBQUksT0FBTyxJQUFJLElBQUosQ0FBUyxHQUFULENBQVg7QUFDQSxLQUFJLGFBQWEsS0FBSyxXQUFM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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBUb29sID0ge307XHJcblRvb2wuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKHN0cikge1xyXG5cdHZhciBkYXRlID0gbmV3IERhdGUoc3RyKTtcclxuXHR2YXIgZGF0ZVN0cmluZyA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSArICctJyArIGRhdGUuZ2V0RGF0ZSgpICsgJyAnICsgZGF0ZS5nZXRIb3VycygpICsgJzonICsgZGF0ZS5nZXRNaW51dGVzKCkgKyAnOicgKyBkYXRlLmdldFNlY29uZHMoKTtcclxuXHRyZXR1cm4gZGF0ZVN0cmluZztcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9vbDsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbmNsYXNzIEFyY2hpdmVBY3Rpb25zIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFxyXG5cdFx0XHRcInNldERhdGFMaXN0XCJcclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldERhdGFMaXN0KCkge1xyXG5cdFx0ZmV0Y2goJ2h0dHBzOi8vY25vZGVqcy5vcmcvYXBpL3YxL3RvcGljcycpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihkYXRhID0+IHRoaXMuYWN0aW9ucy5zZXREYXRhTGlzdChkYXRhKSlcclxuXHRcdFx0LmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ+aKpemUmeWVpicsIGUpKVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhBcmNoaXZlQWN0aW9ucyk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5jbGFzcyBDb250ZW50QWN0aW9ucyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRlQWN0aW9ucyhcclxuXHRcdFx0XCJzZXRDb250ZW50RGF0YVwiXHJcblx0XHQpO1xyXG5cdH1cclxuXHRnZXREYXRhTGlzdChpZCkge1xyXG5cdFx0ZmV0Y2goJ2h0dHBzOi8vY25vZGVqcy5vcmcvYXBpL3YxL3RvcGljLycgKyBpZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKGRhdGEgPT4gdGhpcy5hY3Rpb25zLnNldENvbnRlbnREYXRhKGRhdGEpKVxyXG5cdFx0XHQuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygn5oql6ZSZ5ZWmJywgZSkpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKENvbnRlbnRBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbmNsYXNzIEluZGV4QWN0aW9ucyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRlQWN0aW9ucyhcclxuXHRcdFx0J3NldERhdGFMaXN0J1xyXG5cdFx0KTtcclxuXHR9XHJcblx0Z2V0RGF0YUxpc3QoKSB7XHJcblx0XHRmZXRjaCgnaHR0cHM6Ly9jbm9kZWpzLm9yZy9hcGkvdjEvdG9waWNzP3RhYj1nb29kJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKGRhdGEgPT4gdGhpcy5hY3Rpb25zLnNldERhdGFMaXN0KGRhdGEpKVxyXG5cdFx0XHQuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygn5oql6ZSZ5ZWmJywgZSkpXHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhJbmRleEFjdGlvbnMpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuXHJcbmNsYXNzIE5hdmJhckFjdGlvbnMge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5nZW5lcmF0ZUFjdGlvbnMoXHJcblx0XHRcdCdzZXRQYXRobmFtZSdcclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldFBhdGhuYW1lKCkge1xyXG5cdFx0dGhpcy5hY3Rpb25zLnNldFBhdGhuYW1lKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhOYXZiYXJBY3Rpb25zKTsiLCJpbXBvcnQgQWx0IGZyb20gJ2FsdCc7XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBbHQoKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ib2R5XCI+XHJcblx0XHRcdFx0PE5hdmJhciBoaXN0b3J5PXsgdGhpcy5wcm9wcy5oaXN0b3J5IH0gLz5cclxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG5cdFx0XHRcdDxGb290ZXIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgVG9vbCBmcm9tICcuLi9Ub29sJztcclxuaW1wb3J0IEFyY2hpdmVTdG9yZSBmcm9tICcuLi9zdG9yZXMvQXJjaGl2ZVN0b3JlJztcclxuaW1wb3J0IEFyY2hpdmVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQXJjaGl2ZUFjdGlvbnMnO1xyXG5jbGFzcyBBcmNoaXZlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IEFyY2hpdmVTdG9yZS5nZXRTdGF0ZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRBcmNoaXZlU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xyXG5cdFx0QXJjaGl2ZUFjdGlvbnMuZ2V0RGF0YUxpc3QoKTtcclxuXHR9XHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRBcmNoaXZlU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlKHN0YXRlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0dmFyIEFyY2hpdmVzID0gdGhpcy5zdGF0ZS5kYXRhTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiBcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZC10aW1lbGluZS1ibG9ja1wiIGtleT17aXRlbS5pZH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZC10aW1lbGluZS1pbWcgY2QtcGljdHVyZVwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tcGljdHVyZS5zdmdcIiBhbHQ9XCJQaWN0dXJlXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNkLXRpbWVsaW5lLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxMaW5rIHRvPXsgXCIvYXJ0aWNsZS9cIiArIGl0ZW0uaWQgfT5cclxuXHRcdFx0XHRcdFx0PGg0PntpdGVtLnRpdGxlfTwvaDQ+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjZC1kYXRlXCI+e1Rvb2wuZm9ybWF0RGF0ZShpdGVtLmNyZWF0ZV9hdCl9PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaGVldFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoZWFkZXI+PGgxPuaho+ahiDwvaDE+PC9oZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cImJvdW5kYXJ5XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGlkPVwiY2QtdGltZWxpbmVcIiBjbGFzc05hbWU9XCJjZC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e0FyY2hpdmVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXJjaGl2ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFRvb2wgZnJvbSAnLi4vVG9vbCc7XHJcbmltcG9ydCBDb250ZW50U3RvcmUgZnJvbSAnLi4vc3RvcmVzL0NvbnRlbnRTdG9yZSc7XHJcbmltcG9ydCBDb250ZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0NvbnRlbnRBY3Rpb25zJztcclxuY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSBDb250ZW50U3RvcmUuZ2V0U3RhdGUoKTtcclxuXHRcdHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Q29udGVudFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcclxuXHRcdENvbnRlbnRBY3Rpb25zLmdldERhdGFMaXN0KHRoaXMucHJvcHMucGFyYW1zLmlkKTtcclxuXHR9XHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHRDb250ZW50U3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlKHN0YXRlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjb2wtbGctOVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2hlZXQgcG9zdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGhlYWRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPnt0aGlzLnN0YXRlLmNvbnRlbnREYXRhLnRpdGxlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInBvc3QtbWV0YVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1jbG9ja1wiPjwvc3Bhbj4mbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57VG9vbC5mb3JtYXREYXRlKHRoaXMuc3RhdGUuY29udGVudERhdGEuY3JlYXRlX2F0KX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicG9zdC10YWdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiPjxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi10YWdcIj7moIfnrb48L3NwYW4+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9oZWFkZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPVwiYm91bmRhcnlcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGFydGljbGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMuc3RhdGUuY29udGVudERhdGEuY29udGVudH19IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwicG9zdC1zaGFyZVwiIGNsYXNzTmFtZT1cImJkc2hhcmVidXR0b25ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiYmRzX21vcmVcIiBkYXRhLWNtZD1cIm1vcmVcIj48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJkc190c2luYVwiIGRhdGEtY21kPVwidHNpbmFcIiB0aXRsZT1cIuWIhuS6q+WIsOaWsOa1quW+ruWNmlwiPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiYmRzX3dlaXhpblwiIGRhdGEtY21kPVwid2VpeGluXCIgdGl0bGU9XCLliIbkuqvliLDlvq7kv6FcIj48L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJkc19kb3ViYW5cIiBkYXRhLWNtZD1cImRvdWJhblwiIHRpdGxlPVwi5YiG5Lqr5Yiw6LGG55Oj572RXCI+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJiZHNfZmJvb2tcIiBkYXRhLWNtZD1cImZib29rXCIgdGl0bGU9XCLliIbkuqvliLBGYWNlYm9va1wiPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiYmRzX2NvcHlcIiBkYXRhLWNtZD1cImNvcHlcIiB0aXRsZT1cIuWIhuS6q+WIsOWkjeWItue9keWdgFwiPjwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdmlnYXRpb24gY29sLWxnLTNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1ib3R0b20tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbmF2aWdhdGlvbi10b2NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdmlnYXRpb24taGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLWxpc3QtdW5vcmRlcmVkXCI+PC9zcGFuPiZuYnNwO1RvY1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdmlnYXRpb24tbGlzdCB0b2NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiIGlkPVwibWFya2Rvd24tdG9jLXNlY3Rpb24xXCI+6K+N5rOV5L2c55So5Z+fPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgaWQ9XCJtYXJrZG93bi10b2Mtc2VjdGlvbjJcIj7or43ms5XkvZznlKjln588L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIiBpZD1cIm1hcmtkb3duLXRvYy1zZWN0aW9uM1wiPuivjeazleS9nOeUqOWfnzwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1uYXZpZ2F0aW9uLXRhZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbmF2aWdhdGlvbi10b2NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbmF2aWdhdGlvbi1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1saXN0LXVub3JkZXJlZFwiPjwvc3Bhbj4mbmJzcDtUb2NcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbmF2aWdhdGlvbi1saXN0IHRvY1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgaWQ9XCJtYXJrZG93bi10b2Mtc2VjdGlvbjFcIj7or43ms5XkvZznlKjln588L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIiBpZD1cIm1hcmtkb3duLXRvYy1zZWN0aW9uMlwiPuivjeazleS9nOeUqOWfnzwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiIGlkPVwibWFya2Rvd24tdG9jLXNlY3Rpb24zXCI+6K+N5rOV5L2c55So5Z+fPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1uYXZpZ2F0aW9uLXJlbGF0ZWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdmlnYXRpb24tdG9jXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdmlnYXRpb24taGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbGlzdC11bm9yZGVyZWRcIj48L3NwYW4+Jm5ic3A7UmVsYXRlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1uYXZpZ2F0aW9uLWxpc3QgdG9jXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIiBpZD1cIm1hcmtkb3duLXRvYy1zZWN0aW9uMVwiPuivjeazleS9nOeUqOWfnzwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiL1wiIGlkPVwibWFya2Rvd24tdG9jLXNlY3Rpb24yXCI+6K+N5rOV5L2c55So5Z+fPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgaWQ9XCJtYXJrZG93bi10b2Mtc2VjdGlvbjNcIj7or43ms5XkvZznlKjln588L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZm9vdGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLXNjcm9sbFRvcFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJUb3BcIj5cclxuXHRcdFx0XHRcdDxMaW5rIHRvPVwiamF2YXNjcmlwdDo7XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGlja1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdG5vdGUgZm9vdG5vdGUtdmluc29uXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJmb290LWl0ZW1cIiB0bz1cIi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbWFpbFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJmb290LWl0ZW1cIiB0bz1cIi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiZm9vdC1pdGVtXCIgdG89XCIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLXJzc1wiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJmb290LWl0ZW1cIiB0bz1cIi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tbGluay1leHRlcm5hbFwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TGluayB0bz1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b3JkLWtlZXBcIj4gJmNvcHk75pyI5qGC5Y+2PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Zvb3Rlcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgVG9vbCBmcm9tICcuLi9Ub29sJztcclxuaW1wb3J0IEluZGV4U3RvcmUgZnJvbSAnLi4vc3RvcmVzL0luZGV4U3RvcmUnO1xyXG5pbXBvcnQgSW5kZXhBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvSW5kZXhBY3Rpb25zJztcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0gSW5kZXhTdG9yZS5nZXRTdGF0ZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRJbmRleFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcclxuXHRcdEluZGV4QWN0aW9ucy5nZXREYXRhTGlzdCgpO1xyXG5cdH1cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdEluZGV4U3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlKHN0YXRlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0dmFyIGFydGljbGVzID0gdGhpcy5zdGF0ZS5kYXRhTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiBcclxuXHRcdFx0PGFydGljbGUga2V5PXtpdGVtLmlkfT5cclxuXHRcdFx0XHQ8aGVhZGVyPlxyXG5cdFx0XHRcdFx0PExpbmsgdG89eyBcIi9hcnRpY2xlL1wiICsgaXRlbS5pZCB9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tY2FsZW5kYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuPntUb29sLmZvcm1hdERhdGUoaXRlbS5jcmVhdGVfYXQpfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2hlYWRlcj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZHVsZVwiPlxyXG5cdFx0XHRcdFx0PExpbmsgdG89eyBcIi9hcnRpY2xlL1wiICsgaXRlbS5pZCB9IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9MaW5rPlxyXG5cdFx0XHRcdFx0PHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uY29udGVudH19IC8+XHJcblx0XHRcdFx0XHQ8TGluayB0bz17IFwiL2FydGljbGUvXCIgKyBpdGVtLmlkIH0gY2xhc3NOYW1lPVwicmVhZG1vcmVcIj7or6bmg4U8L0xpbms+XHJcblx0XHRcdFx0XHQ8Zm9vdGVyPlxyXG5cdFx0XHRcdFx0XHQ8TGluayB0bz1cIiNcIiBjbGFzc05hbWU9XCJ3b3JkLWtlZXBcIj48c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tdGFnXCI+PC9zcGFuPiDmoIfnrb7kuIA8L0xpbms+XHJcblx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cIndvcmQta2VlcFwiPjxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi10YWdcIj48L3NwYW4+IOagh+etvuS6jDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PExpbmsgdG89XCIjXCIgY2xhc3NOYW1lPVwid29yZC1rZWVwXCI+PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLXRhZ1wiPjwvc3Bhbj4g5qCH562+5LiJPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b3JkLWtlZXAgcHVsbC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1jb21tZW50XCI+PC9zcGFuPiDor4TorrpcclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLWZpbGUtc3ltbGluay1maWxlXCI+PC9zcGFuPiDliIbkuqtcclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2FydGljbGU+XHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGluZGV4XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwIGNvbC1zbS1vZmZzZXQtMSBjb2wtbGctOSBjb2wtbGctb2Zmc2V0LTFfNVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeS1zbGljZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YXJ0aWNsZXN9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTmF2YmFyU3RvcmUgZnJvbSAnLi4vc3RvcmVzL05hdmJhclN0b3JlJztcclxuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9OYXZiYXJBY3Rpb25zJztcclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSBOYXZiYXJTdG9yZS5nZXRTdGF0ZSgpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHROYXZiYXJTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XHJcblx0XHROYXZiYXJBY3Rpb25zLmdldFBhdGhuYW1lKCk7XHJcblx0fVxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0TmF2YmFyU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlKHN0YXRlKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuXHR9XHJcblx0aGFuZGxlTGluayhldmVudCkge1xyXG5cdFx0TmF2YmFyQWN0aW9ucy5nZXRQYXRobmFtZSgpO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8aGVhZGVyPlxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci12aW5zb24gcmVjdGFuZ2xlXCIgcm9sZT1cIm5hdmlnYXRpb25cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIiB0eXBlPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+IOaciOahguWPtueahOWNmuWuojwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwibmF2YmFyLXRleHRcIj4g54ix57yW56iL54ix55Sf5rS7PC9zbWFsbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGluay5iaW5kKHRoaXMpfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUucGF0aG5hbWUgPT0gJy8nID8gJ2FjdGl2ZScgOiAnJ30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cIndvcmQta2VlcFwiIHRvPVwiL1wiPjxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1ib29rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPiDljZrmlodcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUucGF0aG5hbWUgPT0gJy9hcmNoaXZlJyA/ICdhY3RpdmUnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJ3b3JkLWtlZXBcIiB0bz1cIi9hcmNoaXZlXCI+PHNwYW4gY2xhc3NOYW1lPVwib2N0aWNvbiBvY3RpY29uLXJlcG9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+IOaho+ahiFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5wYXRobmFtZSA9PSAnL2NhdGVnb3J5JyA/ICdhY3RpdmUnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJ3b3JkLWtlZXBcIiB0bz1cIi9jYXRlZ29yeVwiPjxzcGFuIGNsYXNzTmFtZT1cIm9jdGljb24gb2N0aWNvbi1saXN0LXVub3JkZXJlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj4g5YiG57G7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnBhdGhuYW1lID09ICcvdGFnJyA/ICdhY3RpdmUnIDogJyd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJ3b3JkLWtlZXBcIiB0bz1cIi90YWdcIj48c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tdGFnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPiDmoIfnrb5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89XCIjc3RxPVwiIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvY3RpY29uIG9jdGljb24tc2VhcmNoXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdDwvaGVhZGVyPlxyXG5cdFx0KTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmxldCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9Pntyb3V0ZXN9PC9Sb3V0ZXI+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL0luZGV4JztcclxuaW1wb3J0IEFyY2hpdmUgZnJvbSAnLi9jb21wb25lbnRzL0FyY2hpdmUnO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcblx0PFJvdXRlIGNvbXBvbmVudD17QXBwfT5cclxuXHRcdDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0luZGV4fSAvPlxyXG5cdFx0PFJvdXRlIHBhdGg9Jy9hcmNoaXZlJyBjb21wb25lbnQ9e0FyY2hpdmV9IC8+XHJcblx0XHQ8Um91dGUgcGF0aD0nL2FydGljbGUvOmlkJyBjb21wb25lbnQ9e0NvbnRlbnR9IC8+XHJcblx0PC9Sb3V0ZT5cclxuKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XHJcbmltcG9ydCBBcmNoaXZlQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FyY2hpdmVBY3Rpb25zJztcclxuY2xhc3MgQXJjaGl2ZVN0b3JlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYmluZEFjdGlvbnMoQXJjaGl2ZUFjdGlvbnMpO1xyXG5cdFx0dGhpcy5kYXRhTGlzdCA9IFtdO1xyXG5cdH1cclxuXHRzZXREYXRhTGlzdChkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGFMaXN0ID0gZGF0YS5kYXRhO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEFyY2hpdmVTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xyXG5pbXBvcnQgQ29udGVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Db250ZW50QWN0aW9ucyc7XHJcbmNsYXNzIENvbnRlbnRTdG9yZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmJpbmRBY3Rpb25zKENvbnRlbnRBY3Rpb25zKTtcclxuXHRcdHRoaXMuY29udGVudERhdGEgPSB7fTtcclxuXHR9XHJcblx0c2V0Q29udGVudERhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5jb250ZW50RGF0YSA9IGRhdGEuZGF0YTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShDb250ZW50U3RvcmUpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuaW1wb3J0IEluZGV4QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0luZGV4QWN0aW9ucyc7XHJcbmNsYXNzIEluZGV4U3RvcmUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5iaW5kQWN0aW9ucyhJbmRleEFjdGlvbnMpO1xyXG5cdFx0dGhpcy5kYXRhTGlzdCA9IFtdO1xyXG5cdH1cclxuXHRzZXREYXRhTGlzdChkYXRhKSB7XHJcblx0XHR0aGlzLmRhdGFMaXN0ID0gZGF0YS5kYXRhO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEluZGV4U3RvcmUpOyIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcclxuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9OYXZiYXJBY3Rpb25zJztcclxuXHJcbmNsYXNzIE5hdmJhclN0b3JlIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYmluZEFjdGlvbnMoTmF2YmFyQWN0aW9ucyk7XHJcblx0XHR0aGlzLnBhdGhuYW1lID0gJy8nO1xyXG5cdH1cclxuXHRzZXRQYXRobmFtZShwYXRobmFtZSkge1xyXG5cdFx0dGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKE5hdmJhclN0b3JlKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cy5qcycpO1xudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9saWIvaXNfYXJndW1lbnRzLmpzJyk7XG5cbnZhciBkZWVwRXF1YWwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIERhdGUgJiYgZXhwZWN0ZWQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgdHlwZW9mIGFjdHVhbCAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb3B0cy5zdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIDcuNC4gRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKHgpIHtcbiAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgeC5sZW5ndGggIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgeC5jb3B5ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4LnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh4Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHhbMF0gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBvcHRzKSB7XG4gIHZhciBpLCBrZXk7XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICAvL35+fkkndmUgbWFuYWdlZCB0byBicmVhayBPYmplY3Qua2V5cyB0aHJvdWdoIHNjcmV3eSBhcmd1bWVudHMgcGFzc2luZy5cbiAgLy8gICBDb252ZXJ0aW5nIHRvIGFycmF5IHNvbHZlcyB0aGUgcHJvYmxlbS5cbiAgaWYgKGlzQXJndW1lbnRzKGEpKSB7XG4gICAgaWYgKCFpc0FyZ3VtZW50cyhiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgb3B0cyk7XG4gIH1cbiAgaWYgKGlzQnVmZmVyKGEpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKSxcbiAgICAgICAga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7Ly9oYXBwZW5zIHdoZW4gb25lIGlzIGEgc3RyaW5nIGxpdGVyYWwgYW5kIHRoZSBvdGhlciBpc24ndFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIG9wdHMpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBhID09PSB0eXBlb2YgYjtcbn1cbiIsInZhciBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKVxufSkoKSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA/IHN1cHBvcnRlZCA6IHVuc3VwcG9ydGVkO1xuXG5leHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbmZ1bmN0aW9uIHN1cHBvcnRlZChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxuZXhwb3J0cy51bnN1cHBvcnRlZCA9IHVuc3VwcG9ydGVkO1xuZnVuY3Rpb24gdW5zdXBwb3J0ZWQob2JqZWN0KXtcbiAgcmV0dXJuIG9iamVjdCAmJlxuICAgIHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2Ygb2JqZWN0Lmxlbmd0aCA9PSAnbnVtYmVyJyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdjYWxsZWUnKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCAnY2FsbGVlJykgfHxcbiAgICBmYWxzZTtcbn07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbidcbiAgPyBPYmplY3Qua2V5cyA6IHNoaW07XG5cbmV4cG9ydHMuc2hpbSA9IHNoaW07XG5mdW5jdGlvbiBzaGltIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuIiwiLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucHVzaC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFBVU0ggPSAnUFVTSCc7XG5cbmV4cG9ydHMuUFVTSCA9IFBVU0g7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5yZXBsYWNlLlxuICovXG52YXIgUkVQTEFDRSA9ICdSRVBMQUNFJztcblxuZXhwb3J0cy5SRVBMQUNFID0gUkVQTEFDRTtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IHNvbWUgb3RoZXIgYWN0aW9uIHN1Y2hcbiAqIGFzIHVzaW5nIGEgYnJvd3NlcidzIGJhY2svZm9yd2FyZCBidXR0b25zIGFuZC9vciBtYW51YWxseSBtYW5pcHVsYXRpbmdcbiAqIHRoZSBVUkwgaW4gYSBicm93c2VyJ3MgbG9jYXRpb24gYmFyLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICpcbiAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93RXZlbnRIYW5kbGVycy9vbnBvcHN0YXRlXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xudmFyIFBPUCA9ICdQT1AnO1xuXG5leHBvcnRzLlBPUCA9IFBPUDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgUFVTSDogUFVTSCxcbiAgUkVQTEFDRTogUkVQTEFDRSxcbiAgUE9QOiBQT1Bcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvb3BBc3luYyA9IGxvb3BBc3luYztcblxuZnVuY3Rpb24gbG9vcEFzeW5jKHR1cm5zLCB3b3JrLCBjYWxsYmFjaykge1xuICB2YXIgY3VycmVudFR1cm4gPSAwO1xuICB2YXIgaXNEb25lID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpc0RvbmUgPSB0cnVlO1xuICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpc0RvbmUpIHJldHVybjtcblxuICAgIGlmIChjdXJyZW50VHVybiA8IHR1cm5zKSB7XG4gICAgICB3b3JrLmNhbGwodGhpcywgY3VycmVudFR1cm4rKywgbmV4dCwgZG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk7XG59IiwiLyplc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zYXZlU3RhdGUgPSBzYXZlU3RhdGU7XG5leHBvcnRzLnJlYWRTdGF0ZSA9IHJlYWRTdGF0ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIEtleVByZWZpeCA9ICdAQEhpc3RvcnkvJztcbnZhciBRdW90YUV4Y2VlZGVkRXJyb3IgPSAnUXVvdGFFeGNlZWRlZEVycm9yJztcbnZhciBTZWN1cml0eUVycm9yID0gJ1NlY3VyaXR5RXJyb3InO1xuXG5mdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIHJldHVybiBLZXlQcmVmaXggKyBrZXk7XG59XG5cbmZ1bmN0aW9uIHNhdmVTdGF0ZShrZXksIHN0YXRlKSB7XG4gIHRyeSB7XG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oY3JlYXRlS2V5KGtleSksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byBzYXZlIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFF1b3RhRXhjZWVkZWRFcnJvciAmJiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBTYWZhcmkgXCJwcml2YXRlIG1vZGVcIiB0aHJvd3MgUXVvdGFFeGNlZWRlZEVycm9yLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byBzYXZlIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGluIFNhZmFyaSBwcml2YXRlIG1vZGUnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRTdGF0ZShrZXkpIHtcbiAgdmFyIGpzb24gPSB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAganNvbiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNyZWF0ZUtleShrZXkpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHJlYWQgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5IHNldHRpbmdzJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGlmIChqc29uKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZ25vcmUgaW52YWxpZCBKU09OLlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5nZXRIYXNoUGF0aCA9IGdldEhhc2hQYXRoO1xuZXhwb3J0cy5yZXBsYWNlSGFzaFBhdGggPSByZXBsYWNlSGFzaFBhdGg7XG5leHBvcnRzLmdldFdpbmRvd1BhdGggPSBnZXRXaW5kb3dQYXRoO1xuZXhwb3J0cy5nbyA9IGdvO1xuZXhwb3J0cy5nZXRVc2VyQ29uZmlybWF0aW9uID0gZ2V0VXNlckNvbmZpcm1hdGlvbjtcbmV4cG9ydHMuc3VwcG9ydHNIaXN0b3J5ID0gc3VwcG9ydHNIaXN0b3J5O1xuZXhwb3J0cy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdIHx8ICcnO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaFBhdGgocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1BhdGgoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59XG5cbmZ1bmN0aW9uIGdvKG4pIHtcbiAgaWYgKG4pIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyQ29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gRklYTUU6IFdvcmsgYXJvdW5kIG91ciBicm93c2VyIGhpc3Rvcnkgbm90IHdvcmtpbmcgY29ycmVjdGx5IG9uIENocm9tZVxuICAvLyBpT1M6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzI1NjVcbiAgaWYgKHVhLmluZGV4T2YoJ0NyaU9TJykgIT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiB1YS5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX0RPTVN0YXRlU3RvcmFnZSA9IHJlcXVpcmUoJy4vRE9NU3RhdGVTdG9yYWdlJyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlRE9NSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRE9NSGlzdG9yeSk7XG5cbnZhciBfcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZVBhdGgnKTtcblxudmFyIF9wYXJzZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VQYXRoKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIEhUTUw1J3MgaGlzdG9yeSBBUElcbiAqIChwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudCkgdG8gbWFuYWdlIGhpc3RvcnkuXG4gKiBUaGlzIGlzIHRoZSByZWNvbW1lbmRlZCBtZXRob2Qgb2YgbWFuYWdpbmcgaGlzdG9yeSBpbiBicm93c2VycyBiZWNhdXNlXG4gKiBpdCBwcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcy5cbiAqXG4gKiBOb3RlOiBJbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBmdWxsXG4gKiBwYWdlIHJlbG9hZHMgd2lsbCBiZSB1c2VkIHRvIHByZXNlcnZlIFVSTHMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gIHZhciBmb3JjZVJlZnJlc2ggPSBvcHRpb25zLmZvcmNlUmVmcmVzaDtcblxuICB2YXIgaXNTdXBwb3J0ZWQgPSBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KCk7XG4gIHZhciB1c2VSZWZyZXNoID0gIWlzU3VwcG9ydGVkIHx8IGZvcmNlUmVmcmVzaDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgaGlzdG9yeVN0YXRlID0gaGlzdG9yeVN0YXRlIHx8IHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuXG4gICAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0V2luZG93UGF0aCgpO1xuICAgIHZhciBfaGlzdG9yeVN0YXRlID0gaGlzdG9yeVN0YXRlO1xuICAgIHZhciBrZXkgPSBfaGlzdG9yeVN0YXRlLmtleTtcblxuICAgIHZhciBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBzdGF0ZSA9IF9ET01TdGF0ZVN0b3JhZ2UucmVhZFN0YXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICAgIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG5cbiAgICAgIGlmIChpc1N1cHBvcnRlZCkgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LCBoaXN0b3J5U3RhdGUsIHsga2V5OiBrZXkgfSksIG51bGwsIHBhdGgpO1xuICAgIH1cblxuICAgIHZhciBsb2NhdGlvbiA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IHN0YXRlIH0pLCB1bmRlZmluZWQsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFBvcFN0YXRlTGlzdGVuZXIoX3JlZikge1xuICAgIHZhciB0cmFuc2l0aW9uVG8gPSBfcmVmLnRyYW5zaXRpb25UbztcblxuICAgIGZ1bmN0aW9uIHBvcFN0YXRlTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG5cbiAgICAgIHRyYW5zaXRpb25UbyhnZXRDdXJyZW50TG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgICB9XG5cbiAgICBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3BvcHN0YXRlJywgcG9wU3RhdGVMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmlzaFRyYW5zaXRpb24obG9jYXRpb24pIHtcbiAgICB2YXIgYmFzZW5hbWUgPSBsb2NhdGlvbi5iYXNlbmFtZTtcbiAgICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgICB2YXIgYWN0aW9uID0gbG9jYXRpb24uYWN0aW9uO1xuICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlKGtleSwgc3RhdGUpO1xuXG4gICAgdmFyIHBhdGggPSAoYmFzZW5hbWUgfHwgJycpICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICAgIHZhciBoaXN0b3J5U3RhdGUgPSB7XG4gICAgICBrZXk6IGtleVxuICAgIH07XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGg7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCBsb2NhdGlvbiB1cGRhdGUuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5U3RhdGUsIG51bGwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJFUExBQ0VcbiAgICAgIGlmICh1c2VSZWZyZXNoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZURPTUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGVcbiAgfSkpO1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMCxcbiAgICAgIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW5CZWZvcmUobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICBoaXN0b3J5LnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaGlzdG9yeS51bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG5cbiAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayxcbiAgICB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9va1xuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIaXN0b3J5KTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NSGlzdG9yeShvcHRpb25zKSB7XG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe1xuICAgIGdldFVzZXJDb25maXJtYXRpb246IF9ET01VdGlscy5nZXRVc2VyQ29uZmlybWF0aW9uXG4gIH0sIG9wdGlvbnMsIHtcbiAgICBnbzogX0RPTVV0aWxzLmdvXG4gIH0pKTtcblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnRE9NIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbjogbGlzdGVuXG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVET01IaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24yID0gcmVxdWlyZSgnLi9jcmVhdGVMb2NhdGlvbicpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUxvY2F0aW9uMik7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2sgPSByZXF1aXJlKCcuL3J1blRyYW5zaXRpb25Ib29rJyk7XG5cbnZhciBfcnVuVHJhbnNpdGlvbkhvb2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcnVuVHJhbnNpdGlvbkhvb2spO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbnZhciBfZGVwcmVjYXRlID0gcmVxdWlyZSgnLi9kZXByZWNhdGUnKTtcblxudmFyIF9kZXByZWNhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlKTtcblxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tS2V5KGxlbmd0aCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmXG4gIC8vYS5hY3Rpb24gPT09IGIuYWN0aW9uICYmIC8vIERpZmZlcmVudCBhY3Rpb24gIT09IGxvY2F0aW9uIGNoYW5nZS5cbiAgYS5rZXkgPT09IGIua2V5ICYmIF9kZWVwRXF1YWwyWydkZWZhdWx0J10oYS5zdGF0ZSwgYi5zdGF0ZSk7XG59XG5cbnZhciBEZWZhdWx0S2V5TGVuZ3RoID0gNjtcblxuZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IG9wdGlvbnMuZ2V0Q3VycmVudExvY2F0aW9uO1xuICB2YXIgZmluaXNoVHJhbnNpdGlvbiA9IG9wdGlvbnMuZmluaXNoVHJhbnNpdGlvbjtcbiAgdmFyIHNhdmVTdGF0ZSA9IG9wdGlvbnMuc2F2ZVN0YXRlO1xuICB2YXIgZ28gPSBvcHRpb25zLmdvO1xuICB2YXIga2V5TGVuZ3RoID0gb3B0aW9ucy5rZXlMZW5ndGg7XG4gIHZhciBnZXRVc2VyQ29uZmlybWF0aW9uID0gb3B0aW9ucy5nZXRVc2VyQ29uZmlybWF0aW9uO1xuXG4gIGlmICh0eXBlb2Yga2V5TGVuZ3RoICE9PSAnbnVtYmVyJykga2V5TGVuZ3RoID0gRGVmYXVsdEtleUxlbmd0aDtcblxuICB2YXIgdHJhbnNpdGlvbkhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhbGxLZXlzID0gW107XG4gIHZhciBjaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAmJiBwZW5kaW5nTG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YocGVuZGluZ0xvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24obmV3TG9jYXRpb24pIHtcbiAgICB2YXIgY3VycmVudCA9IGdldEN1cnJlbnQoKTtcblxuICAgIGxvY2F0aW9uID0gbmV3TG9jYXRpb247XG5cbiAgICBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBhbGxLZXlzID0gW10uY29uY2F0KGFsbEtleXMuc2xpY2UoMCwgY3VycmVudCArIDEpLCBbbG9jYXRpb24ua2V5XSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlJFUExBQ0UpIHtcbiAgICAgIGFsbEtleXNbY3VycmVudF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBjaGFuZ2VMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9sb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgICAgYWxsS2V5cyA9IFtfbG9jYXRpb24ua2V5XTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKF9sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZUxpc3RlbmVycyA9IGNoYW5nZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgX0FzeW5jVXRpbHMubG9vcEFzeW5jKHRyYW5zaXRpb25Ib29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgICAgX3J1blRyYW5zaXRpb25Ib29rMlsnZGVmYXVsdCddKHRyYW5zaXRpb25Ib29rc1tpbmRleF0sIGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgIGRvbmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAoZ2V0VXNlckNvbmZpcm1hdGlvbiAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgICBjYWxsYmFjayhvayAhPT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwZW5kaW5nTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbnNBcmVFcXVhbChsb2NhdGlvbiwgbmV4dExvY2F0aW9uKSkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgcGVuZGluZ0xvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xuXG4gICAgY29uZmlybVRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAhPT0gbmV4dExvY2F0aW9uKSByZXR1cm47IC8vIFRyYW5zaXRpb24gd2FzIGludGVycnVwdGVkLlxuXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgLy8gdHJlYXQgUFVTSCB0byBjdXJyZW50IHBhdGggbGlrZSBSRVBMQUNFIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBicm93c2Vyc1xuICAgICAgICBpZiAobmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgICAgIHZhciBwcmV2UGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgICAgIHZhciBuZXh0UGF0aCA9IGNyZWF0ZVBhdGgobmV4dExvY2F0aW9uKTtcblxuICAgICAgICAgIGlmIChuZXh0UGF0aCA9PT0gcHJldlBhdGgpIG5leHRMb2NhdGlvbi5hY3Rpb24gPSBfQWN0aW9ucy5SRVBMQUNFO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbmlzaFRyYW5zaXRpb24obmV4dExvY2F0aW9uKSAhPT0gZmFsc2UpIHVwZGF0ZUxvY2F0aW9uKG5leHRMb2NhdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uICYmIG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkge1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGxvY2F0aW9uLmtleSk7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobmV4dExvY2F0aW9uLmtleSk7XG5cbiAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEgJiYgbmV4dEluZGV4ICE9PSAtMSkgZ28ocHJldkluZGV4IC0gbmV4dEluZGV4KTsgLy8gUmVzdG9yZSB0aGUgVVJMLlxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUFVTSCwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UobG9jYXRpb24pIHtcbiAgICB0cmFuc2l0aW9uVG8oY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlJFUExBQ0UsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBjcmVhdGVSYW5kb21LZXkoa2V5TGVuZ3RoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gPT0gbnVsbCB8fCB0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSByZXR1cm4gbG9jYXRpb247XG5cbiAgICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcblxuICAgIHZhciByZXN1bHQgPSBwYXRobmFtZTtcblxuICAgIGlmIChzZWFyY2gpIHJlc3VsdCArPSBzZWFyY2g7XG5cbiAgICBpZiAoaGFzaCkgcmVzdWx0ICs9IGhhc2g7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBhY3Rpb24pIHtcbiAgICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gY3JlYXRlS2V5KCkgOiBhcmd1bWVudHNbMl07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vd2FybmluZyhcbiAgICAgIC8vICBmYWxzZSxcbiAgICAgIC8vICAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24gaXMgZGVwcmVjYXRlZDsgdXNlIGEgJyArXG4gICAgICAvLyAgJ2xvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCdcbiAgICAgIC8vKVxuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKGxvY2F0aW9uKTtcblxuICAgICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgICAgYWN0aW9uID0ga2V5O1xuICAgICAga2V5ID0gYXJndW1lbnRzWzNdIHx8IGNyZWF0ZUtleSgpO1xuICAgIH1cblxuICAgIHJldHVybiBfY3JlYXRlTG9jYXRpb24zWydkZWZhdWx0J10obG9jYXRpb24sIGFjdGlvbiwga2V5KTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUobG9jYXRpb24sIHN0YXRlKTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShnZXRDdXJyZW50TG9jYXRpb24oKSwgc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uU3RhdGUobG9jYXRpb24sIHN0YXRlKSB7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24uc3RhdGUsIHN0YXRlKTtcbiAgICBzYXZlU3RhdGUobG9jYXRpb24ua2V5LCBsb2NhdGlvbi5zdGF0ZSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICh0cmFuc2l0aW9uSG9va3MuaW5kZXhPZihob29rKSA9PT0gLTEpIHRyYW5zaXRpb25Ib29rcy5wdXNoKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIHRyYW5zaXRpb25Ib29rcyA9IHRyYW5zaXRpb25Ib29rcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBwdXNoU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcblxuICAgIHB1c2goX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcblxuICAgIHJlcGxhY2UoX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0ZW5CZWZvcmU6IGxpc3RlbkJlZm9yZSxcbiAgICBsaXN0ZW46IGxpc3RlbixcbiAgICB0cmFuc2l0aW9uVG86IHRyYW5zaXRpb25UbyxcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGNyZWF0ZUtleTogY3JlYXRlS2V5LFxuICAgIGNyZWF0ZVBhdGg6IGNyZWF0ZVBhdGgsXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBjcmVhdGVMb2NhdGlvbjogY3JlYXRlTG9jYXRpb24sXG5cbiAgICBzZXRTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShzZXRTdGF0ZSwgJ3NldFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBsb2NhdGlvbi5rZXkgdG8gc2F2ZSBzdGF0ZSBpbnN0ZWFkJyksXG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShyZWdpc3RlclRyYW5zaXRpb25Ib29rLCAncmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10odW5yZWdpc3RlclRyYW5zaXRpb25Ib29rLCAndW5yZWdpc3RlclRyYW5zaXRpb25Ib29rIGlzIGRlcHJlY2F0ZWQ7IHVzZSB0aGUgY2FsbGJhY2sgcmV0dXJuZWQgZnJvbSBsaXN0ZW5CZWZvcmUgaW5zdGVhZCcpLFxuICAgIHB1c2hTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShwdXNoU3RhdGUsICdwdXNoU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHB1c2ggaW5zdGVhZCcpLFxuICAgIHJlcGxhY2VTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShyZXBsYWNlU3RhdGUsICdyZXBsYWNlU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHJlcGxhY2UgaW5zdGVhZCcpXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvL2ltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZVBhdGgnKTtcblxudmFyIF9wYXJzZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VQYXRoKTtcblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIHZhciBsb2NhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcvJyA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IF9BY3Rpb25zLlBPUCA6IGFyZ3VtZW50c1sxXTtcbiAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMl07XG5cbiAgdmFyIF9mb3VydGhBcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzNdO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10obG9jYXRpb24pO1xuXG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgIC8vd2FybmluZyhcbiAgICAvLyAgZmFsc2UsXG4gICAgLy8gICdUaGUgc3RhdGUgKDJuZCkgYXJndW1lbnQgdG8gY3JlYXRlTG9jYXRpb24gaXMgZGVwcmVjYXRlZDsgdXNlIGEgJyArXG4gICAgLy8gICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnXG4gICAgLy8pXG5cbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgYWN0aW9uID0ga2V5IHx8IF9BY3Rpb25zLlBPUDtcbiAgICBrZXkgPSBfZm91cnRoQXJnO1xuICB9XG5cbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoIHx8ICcnO1xuICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2ggfHwgJyc7XG4gIHZhciBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlIHx8IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCxcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgYWN0aW9uOiBhY3Rpb24sXG4gICAga2V5OiBrZXlcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlTG9jYXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvL2ltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnXG5cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZGVwcmVjYXRlKGZuKSB7XG4gIHJldHVybiBmbjtcbiAgLy9yZXR1cm4gZnVuY3Rpb24gKCkge1xuICAvLyAgd2FybmluZyhmYWxzZSwgJ1toaXN0b3J5XSAnICsgbWVzc2FnZSlcbiAgLy8gIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIC8vfVxufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGRlcHJlY2F0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBleHRyYWN0UGF0aChzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKC9eaHR0cHM/OlxcL1xcL1teXFwvXSovKTtcblxuICBpZiAobWF0Y2ggPT0gbnVsbCkgcmV0dXJuIHN0cmluZztcblxuICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4dHJhY3RQYXRoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZXh0cmFjdFBhdGggPSByZXF1aXJlKCcuL2V4dHJhY3RQYXRoJyk7XG5cbnZhciBfZXh0cmFjdFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0cmFjdFBhdGgpO1xuXG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBfZXh0cmFjdFBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG4gIHZhciBzZWFyY2ggPSAnJztcbiAgdmFyIGhhc2ggPSAnJztcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocGF0aCA9PT0gcGF0aG5hbWUsICdBIHBhdGggbXVzdCBiZSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggb25seSwgbm90IGEgZnVsbHkgcXVhbGlmaWVkIFVSTCBsaWtlIFwiJXNcIicsIHBhdGgpIDogdW5kZWZpbmVkO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIGlmIChwYXRobmFtZSA9PT0gJycpIHBhdGhuYW1lID0gJy8nO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2hcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gcGFyc2VQYXRoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBydW5UcmFuc2l0aW9uSG9vayhob29rLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IGhvb2sobG9jYXRpb24sIGNhbGxiYWNrKTtcblxuICBpZiAoaG9vay5sZW5ndGggPCAyKSB7XG4gICAgLy8gQXNzdW1lIHRoZSBob29rIHJ1bnMgc3luY2hyb25vdXNseSBhbmQgYXV0b21hdGljYWxseVxuICAgIC8vIGNhbGwgdGhlIGNhbGxiYWNrIHdpdGggdGhlIHJldHVybiB2YWx1ZS5cbiAgICBjYWxsYmFjayhyZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShyZXN1bHQgPT09IHVuZGVmaW5lZCwgJ1lvdSBzaG91bGQgbm90IFwicmV0dXJuXCIgaW4gYSB0cmFuc2l0aW9uIGhvb2sgd2l0aCBhIGNhbGxiYWNrIGFyZ3VtZW50OyBjYWxsIHRoZSBjYWxsYmFjayBpbnN0ZWFkJykgOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gcnVuVHJhbnNpdGlvbkhvb2s7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iXX0=