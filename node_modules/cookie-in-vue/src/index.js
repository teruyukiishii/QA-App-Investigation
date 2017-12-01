/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function () {

  const Cookies = require('js-cookie')

  Number.isInteger = Number.isInteger || function(value) {
      return typeof value === 'number' && isFinite(value) &&
        Math.floor(value) === value
    }

  const VueCookie = {
    install: function(Vue, option) {
      Vue.prototype.$cookie = this
      Vue.cookie = this
    },
    set: function(name, value, expires, path) {
        expires = expires || 7
      if (Number.isInteger(expires)) {
        return Cookies.set(name, value, {expires: expires, path: path || '/'})
      } else {
        console.error('Expires in VueCookie: Expected an integer value')
      }

    },
    get: function(name) {
      return Cookies.get(name)
    },
    remove: function(name, path) {
      this.set(name, '', -1, path)
    }
  }
  if (typeof exports == "object") {
    module.exports = VueCookie;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return VueCookie; })
  } else if (window.Vue) {
    window.VueCookie = VueCookie;
    Vue.use(VueCookie);
  }
})()


