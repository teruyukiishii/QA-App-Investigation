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
import VueCookie from 'cookie-in-vue';
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
            Event.$emit('push-page', {
              extends: Questions_detail, 
              data() {
                return {
                  questionid: id
                }
              }
            });
          }
        }
      });
    },
    listQuestion() {
      if (this.$store.state.login) {
        axios.get(process.env.API_DOMAIN_URL + "questions", {
          headers: {
            'access-token': VueCookie.get('access-token'),
            'client': VueCookie.get('client'),
            'uid': VueCookie.get('uid')
          }
        })
        .then(response => {
          Vue.set(this, 'results', response.data)
          this.$emit('refresh')
        })
      }
    }
  },
  mounted() {
    this.$store.watch((state) => state.login, () => {
      this.listQuestion() 
    })
    this.listQuestion()
  }
}
</script>
