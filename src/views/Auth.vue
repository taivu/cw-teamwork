<template>
  <div class="auth">
    <h1>Authenticating...</h1>

    <button @click="getToken">Get Token</button>

    <div v-if="response">
      <p v-for="(resVal, resProp, index) in response" :key="index">
        {{ resProp }}: {{ resVal }}
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
      code: null,
      response: null
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    this.code = this.$route.query.code
  },
  methods: {
    getToken () {
      this.$api({
        method: 'post',
        url: 'https://www.teamwork.com/launchpad/v1/token.json',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': config.apiKey
        },
        data: JSON.stringify({
          code: this.code
        })
      })
        .then(res => {
          this.response = res.data
        })
    }
  }
}
</script>
