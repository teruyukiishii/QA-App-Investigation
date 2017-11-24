<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-lazy-repeat
        :render-item="renderItem"
        :length="100"
      >
      </v-ons-lazy-repeat>
    </v-ons-list> 
  </v-ons-page>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
export default {
  data() {
    return {
      results: []
    };
  },
  methods: {
    renderItem(i) {
      var content = 'None'
      if (this.results.length > i) {
        content = this.results[i].content
      }
      return new Vue({
        template: `
          <v-ons-list-item :key="index">
            Item #{{ hihihi }}
          </v-ons-list-item>
        `,
        data() {
          return {
            index: i,
            hihihi: content 
          };
        }
      });
    }
  },
  mounted() {
    axios.get(process.env.API_DOMAIN_URL + "v1/posts")
    .then(response => {
      Vue.set(this, 'results', response.data["posts"])
      this.$emit('refresh')
    })
  }
}
</script>
