<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">test1</div>
    </v-ons-toolbar>
    <div>テストページ１</div>
    <v-ons-button @click="push">テストページ2へ</v-ons-button>
  </v-ons-page>
</template>
 
<script>
  import test2 from './test2.vue'
  export default {
    methods: {
      push() {
        this.$emit('push-page', test2)
      }
    }
  }
</script>

