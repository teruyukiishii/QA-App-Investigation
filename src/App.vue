<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
        <div class="right">
          <v-ons-toolbar-button>
            <v-ons-icon icon="md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
          <v-ons-button @click="login">
            <v-ons-icon icon="md-facebook"></v-ons-icon> 
          </v-ons-button>
          {{ name }} 
        </div>
      </v-ons-toolbar>

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
        userName: '',
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
    methods: {
      login() {
        var ref = window.open('https://rocky-scrubland-17659.herokuapp.com/auth/facebook?auth_origin_url=http://titeck.html.xdomain.jp/&omniauth_window_type=newWindow', "_blank", "location=yes");

        var messanger = setInterval(function() {
          var message = 'requestCredentials';
          ref.postMessage(message, 'https://rocky-scrubland-17659.herokuapp.com/');
        }, 500);
      },
      afterLogin(rec) {
        this.userName = rec.data['name']; 
      }
    },
    created() {
      window.addEventListener('message', this.afterLogin);
    },
    destroyed() {
      window.removeEventListener('message', this.afterLogin);
    },
    computed: {
      title() {
        return this.tabs[this.activeIndex].label; 
      },
      name() {
        return this.userName;
      }
    }
  };
</script>
