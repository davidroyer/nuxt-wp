'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _regenerator = require('babel-runtime/regenerator')

var _regenerator2 = _interopRequireDefault(_regenerator)

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator')

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2)

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _axios = require('axios')

var _axios2 = _interopRequireDefault(_axios)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var menuApiPath = 'menus/v1/menus'

var WpApi = (function() {
  function WpApi(siteurl) {
    ;(0, _classCallCheck3.default)(this, WpApi)

    this.apiBase = siteurl + '/wp-json'
    this.menuItemsUrl = this.apiBase + '/' + menuApiPath
    this.options = {
      params: {
        page: 1,
        per_page: 10
      }
    }
  }

  ;(0, _createClass3.default)(WpApi, [
    {
      key: 'menus',
      value: (function() {
        var _ref = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
            var _ref2, data

            return _regenerator2.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2
                      return _axios2.default.get(this.apiBase + '/wp/v2/menus')

                    case 2:
                      _ref2 = _context.sent
                      data = _ref2.data
                      return _context.abrupt('return', data)

                    case 5:
                    case 'end':
                      return _context.stop()
                  }
                }
              },
              _callee,
              this
            )
          })
        )

        function menus() {
          return _ref.apply(this, arguments)
        }

        return menus
      })()
    },
    {
      key: 'menu',
      value: (function() {
        var _ref3 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee2(menuSlug) {
            var _ref4, data

            return _regenerator2.default.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2
                      return _axios2.default.get(this.apiBase + '/wp/v2/menus/' + menuSlug)

                    case 2:
                      _ref4 = _context2.sent
                      data = _ref4.data
                      return _context2.abrupt('return', data)

                    case 5:
                    case 'end':
                      return _context2.stop()
                  }
                }
              },
              _callee2,
              this
            )
          })
        )

        function menu(_x) {
          return _ref3.apply(this, arguments)
        }

        return menu
      })()
    },
    {
      key: 'posts',
      value: (function() {
        var _ref5 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee3() {
            var postType =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'posts'

            var _ref6, data

            return _regenerator2.default.wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.next = 2
                      return _axios2.default.get(this.apiBase + '/wp/v2/' + postType, this.options)

                    case 2:
                      _ref6 = _context3.sent
                      data = _ref6.data
                      return _context3.abrupt('return', data)

                    case 5:
                    case 'end':
                      return _context3.stop()
                  }
                }
              },
              _callee3,
              this
            )
          })
        )

        function posts() {
          return _ref5.apply(this, arguments)
        }

        return posts
      })()
    },
    {
      key: 'post',
      value: (function() {
        var _ref7 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee4(slug) {
            var postType =
              arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'posts'

            var _ref8, data

            return _regenerator2.default.wrap(
              function _callee4$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      _context4.next = 2
                      return _axios2.default.get(
                        this.apiBase + '/wp/v2/' + postType + '/?slug=' + slug,
                        this.options
                      )

                    case 2:
                      _ref8 = _context4.sent
                      data = _ref8.data
                      return _context4.abrupt('return', data[0])

                    case 5:
                    case 'end':
                      return _context4.stop()
                  }
                }
              },
              _callee4,
              this
            )
          })
        )

        function post(_x4) {
          return _ref7.apply(this, arguments)
        }

        return post
      })()
    },
    {
      key: 'pages',
      value: (function() {
        var _ref9 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee5() {
            var _ref10, data

            return _regenerator2.default.wrap(
              function _callee5$(_context5) {
                while (1) {
                  switch ((_context5.prev = _context5.next)) {
                    case 0:
                      _context5.next = 2
                      return _axios2.default.get(this.apiBase + '/wp/v2/pages', this.options)

                    case 2:
                      _ref10 = _context5.sent
                      data = _ref10.data
                      return _context5.abrupt('return', data)

                    case 5:
                    case 'end':
                      return _context5.stop()
                  }
                }
              },
              _callee5,
              this
            )
          })
        )

        function pages() {
          return _ref9.apply(this, arguments)
        }

        return pages
      })()
    },
    {
      key: 'page',
      value: (function() {
        var _ref11 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee6(slug) {
            var _ref12, data

            return _regenerator2.default.wrap(
              function _callee6$(_context6) {
                while (1) {
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      _context6.next = 2
                      return _axios2.default.get(this.apiBase + '/wp/v2/pages/?slug=' + slug)

                    case 2:
                      _ref12 = _context6.sent
                      data = _ref12.data
                      return _context6.abrupt('return', data[0])

                    case 5:
                    case 'end':
                      return _context6.stop()
                  }
                }
              },
              _callee6,
              this
            )
          })
        )

        function page(_x5) {
          return _ref11.apply(this, arguments)
        }

        return page
      })()
    },
    {
      key: 'postTypes',
      value: (function() {
        var _ref13 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee7() {
            var _ref14, data

            return _regenerator2.default.wrap(
              function _callee7$(_context7) {
                while (1) {
                  switch ((_context7.prev = _context7.next)) {
                    case 0:
                      _context7.next = 2
                      return _axios2.default.get(this.apiBase + '/wp/v2/types', this.options)

                    case 2:
                      _ref14 = _context7.sent
                      data = _ref14.data
                      return _context7.abrupt('return', data)

                    case 5:
                    case 'end':
                      return _context7.stop()
                  }
                }
              },
              _callee7,
              this
            )
          })
        )

        function postTypes() {
          return _ref13.apply(this, arguments)
        }

        return postTypes
      })()
    },
    {
      key: 'fullSiteData',
      value: function fullSiteData() {
        return _axios2.default
          .get(this.apiBase)
          .then(function(json) {
            return { fullSiteData: json.data }
          })
          .catch(function(e) {
            return { error: e }
          })
      }
    },
    {
      key: 'siteData',
      value: function siteData() {
        return _axios2.default
          .get(this.apiBase)
          .then(function(json) {
            var _json$data = json.data,
              name = _json$data.name,
              description = _json$data.description,
              url = _json$data.url,
              home = _json$data.home,
              gmt_offset = _json$data.gmt_offset,
              timezone_string = _json$data.timezone_string

            return {
              siteData: {
                name: name,
                description: description,
                url: url,
                home: home,
                gmt_offset: gmt_offset,
                timezone_string: timezone_string
              }
            }
          })
          .catch(function(e) {
            return { error: e }
          })
      }
    }
  ])
  return WpApi
})()

exports.default = WpApi
