<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>質問一覧</v-ons-back-button>
      </div>
      <div class="center">質問詳細(ID = {{ questionid }})</div>
    </v-ons-toolbar>
    <p style="text-align: center">This is the second page</p>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      questionid: -1
    }
  },
  computed: {
    ComputedId() {
      return this.questionid
    }
  }
}
</script>
