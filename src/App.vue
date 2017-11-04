<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
        <div class="right">
          <v-ons-toolbar-button>
            <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>
      <div style="text-align: center; padding-top:10px">Hello World!</div>
      <v-ons-tabbar swipeable position="auto"
        :tabs="tabs"
        :visible="true"
        :index.sync="activeIndex"
      >
      </v-ons-tabbar>
    </v-ons-page>
</template>
<script>
  import HomePage from './pages/HomePage.vue'
  import Category from './pages/Category.vue'
  import MyQA     from './pages/MyQA.vue'
  import Register from './pages/Register.vue'

  export default{
    data() {
      return {
        activeIndex: 0,
        tabs: [
          {
            icon: 'md-home',
            page: HomePage,
            label: 'ホーム'
          },
          {
            icon: 'md-view-column',
            page: Category,
            label: 'カテゴリ'
          },
          {
            icon: 'md-comment-list',
            page: MyQA,
            label: 'My Q&A'
          },
          {
            icon: 'md-account',
            page: Register,
            label: '登録'
          }
        ]
      };
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label; 
      } 
    }
  };
</script>
