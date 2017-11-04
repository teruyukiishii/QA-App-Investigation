<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-lazy-repeat
        :render-item="renderItem"
        :length="1000"
      >
      </v-ons-lazy-repeat>
    </v-ons-list> 
  </v-ons-page>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      renderItem:
        i => new Vue({
          template: `
            <v-ons-list-item :key="index">
              #{{ index }}
            </v-ons-list-item>
          `,
          data() {
            return {
              index: i
            };
          }
        })
    };
  }
}
</script>
