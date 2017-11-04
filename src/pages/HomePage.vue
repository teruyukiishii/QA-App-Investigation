<template>
  <v-ons-page>
    <v-ons-tabbar swipeable position="top"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex2"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Questions from './Questions.vue'
import Specialists from './Specialists.vue'

export default {
  data() {
    return {
      activeIndex2: 0,
      tabs: [
        {
          label: '質問',
          page: Questions
        },
        {
          label: '専門家',
          page: Specialists
        }
      ]
    }
  }
}
</script>
