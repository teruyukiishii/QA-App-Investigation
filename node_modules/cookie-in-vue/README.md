# Cookie-in-vue
This is a vue plugin to oparate cookie,and it depend `js-cookie`


## Installation
```bash
npm install cookie-in-vue --save
```
### Usage
```javascript
import Vue from 'vue'
import VueCookie from 'cookie-in-vue'

Vue.use(VueCookie)

// somo.vue
export default new Vue({
  // ...
  methods: {
    setCookies(token) {
      this.$cookie.set('token', token, 7, 'localhost')
    },
    getSomeCookies() {
      this.$cookie.get('token')
    },
    removeSomeCookies(name) {
      this.$cookie.remove('token')
    }
  }
})

// other ways
VueCookie.set('token', token, 7, 'localhost')
VueCookie.get('token')
VueCookie.remove('token') // VueCookie.remove('token', -1, 'localhost')

```

### All code
```javascript
(function () {

  const Cookies = require('js-cookie')

  Number.isInteger = Number.isInteger || function(value) {
      return typeof value === 'number' && isFinite(value) &&
        Math.floor(value) === value
    }

  const VueCookie = {
    install(Vue, option) {
      Vue.prototype.$cookie = this
      Vue.cookie = this
    },
    set(name, value, expires, path) {
        expires = expires || 7
      if (Number.isInteger(expires)) {
        if(expires > 0) {
          return Cookies.set(name, value, {expires: expires, path: path || '/'})
        }
      } else {
        console.error('Expires in VueCookie: Expected an integer value')
      }

    },
    get(name) {
      return Cookies.get(name)
    },
    remove(name, path) {
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
```