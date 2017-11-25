<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>質問一覧</v-ons-back-button>
      </div>
      <div class="center">質問詳細(ID = {{ ComputedId }})</div>
    </v-ons-toolbar>
    <p style="text-align: center">This is the second page</p>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      Id: -1
    }
  },
  mounted() {
    console.log('##### mounted');
    Event.$on('question-id', this.setId);
  },
  methods: {
    setId(Id) {
      this.Id = Id;
      console.log('##### Id: ' + this.Id);
    }
  },
  computed: {
    ComputedId() {
      console.log('###ComputedId: ' + this.Id);
      console.log('##### forceUpdate start. this.Id: ' + this.Id);
      this.$forceUpdate();
      console.log('##### forceUpdate end. this.Id: ' + this.Id);
      return this.Id
    }
  }
}
</script>
