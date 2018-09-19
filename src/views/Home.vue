<template>
  <div class="home">
    <button @click="login">Login</button>

    <div v-if="data">
      <p v-for="(itemValue, itemKey, index) in data.account" :key="index">
        <strong>{{ itemKey }}:</strong> {{ itemValue }}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import config from '@/config/config'

export default {
  name: 'home',
  data () {
    return {
      data: null,
      code: null
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    this.code = this.$route.query.code
  },
  methods: {
    login () {
      window.open('https://www.teamwork.com/launchpad/login?redirect_uri=http%3A%2F%2F192.168.1.225%3A8080%2Fauth', '_blank')
    },
    check () {
      this.$api({
        method: 'get',
        url: 'https://authenticate.teamwork.com/authenticate.json',
        headers: {
          'Authorization': 'Basic ' + btoa(`${config.apiKey}:taivu`)
        }
      })
        .then(res => {
          this.data = res.data
        })
    }
  }
}
</script>
