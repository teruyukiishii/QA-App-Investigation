<template>
  <v-ons-page>

    <v-ons-navigator swipeable
      :page-stack="pageStack"
    >
    </v-ons-navigator>

  </v-ons-page>
</template>

<script>
import Questions_list from './Questions_list.vue';
import Questions_detail from './Questions_detail.vue';

export default {
  data() {
    return {
      pageStack: [Questions_detail, Questions_list]
    };
  },
  created() {
    Event.$on('push-page', this.setDetail);
  },
  methods: {
    setDetail(event) {
      this.pageStack.push(event[0]);
      Event.$emit('question-id', event[1]);
    }
  }
}
</script>
