<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
        <div class="right">
          <v-ons-toolbar-button>
            <v-ons-icon icon="md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
          <v-ons-button v-if="name == ''" @click="login">
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
  import VueCookie from 'cookie-in-vue'

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
        var ref = window.open(process.env.API_DOMAIN_URL + 'auth/facebook?auth_origin_url=' + process.env.FRONT_DOMAIN_URL + '&omniauth_window_type=newWindow', "_blank", "location=yes");

        var messanger = setInterval(function() {
          var message = 'requestCredentials';
          ref.postMessage(message, process.env.API_DOMAIN_URL);
        }, 500);
      },
      recieveMessage(rec) {
        if (rec.data != '') {
          if (rec.data['type'] == 'login') {
            this.userName = rec.data['data']['name'];
            VueCookie.set('access-token', rec.data['data']['auth_token']);
            VueCookie.set('client', rec.data['data']['client_id']);
            VueCookie.set('uid', rec.data['data']['uid']);
            this.$store.commit('set', true);
          }
        }
      }
    },
    created() {
      window.addEventListener('message', this.recieveMessage, false);
    },
    destroyed() {
      window.removeEventListener('message', this.recieveMessage);
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
