<template>
  <v-ons-page>
    <div>カテゴリページ</div>
  <div>
    <button @click="checkout">Checkout</button>
  </div>
  </v-ons-page>
</template>

<script>
import Vue from 'vue';
import VueStripeCheckout from '../stripe-checkout.js';

const options = {
  key: 'pk_test_euNLhyLv4T4Wc0YwAlTMiNBi',
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'PHP',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}

Vue.use(VueStripeCheckout, options);

export default {
  methods: {
    checkout() {
      // this.$checkout.close() is also available.
      this.$checkout.open({
        name: 'Shut up and take my money!',
        currency: 'USD',
        amount: 99999,
        token(token) {
          console.log(token)
        } 
      });
    }
  }
}
</script>
