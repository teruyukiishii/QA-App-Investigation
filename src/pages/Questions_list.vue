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
import Questions_detail from './Questions_detail.vue';
export default {
  data() {
    return {
      results: []
    };
  },
  methods: {
    renderItem(i) {
      var content = 'None'
      var id = 'None'
      if (this.results.length > i) {
        id = this.results[i].id
        content = this.results[i].content
      }
      return new Vue({
        template: `
          <v-ons-list-item :key="index" @click="push">
            Item({{ id  }}) #{{ content }}
          </v-ons-list-item>
        `,
        data() {
          return {
            index: i,
            id: id,
            content: content 
          };
        },
        methods: {
          push() {
            Event.$emit('push-page', [Questions_detail, this.id]);
          }
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
