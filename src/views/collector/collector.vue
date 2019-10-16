<template>
<div class="container min-vw-100 h-100 px-3 py-3 bg-light">
  <app-log api="collector" name="Log" lines="100"></app-log>
  <b-card bg-variant="light" header="Set IP" class="text-left mt-3">
    <b-form inline>
    <b-form-input v-model="ip" pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$" placeholder="Enter IP address" class="mr-2"></b-form-input>
    <b-button variant="success" @click="setIp">Set</b-button>
  </b-form>
  </b-card>
</div>
</template>

<script>

import v1 from '@/utils/v1'

import Log from '@/components/log/log'

export default {
  data () {
    return {
      ip: undefined
    }
  },
  methods: {
    async setIp () {
      try {
        await v1.post('/collector/change', {
          ip: this.ip
        })
        this.ip = undefined
      } catch (e) {
        console.error('Impossibile modificare l\'indirizzo IP.')
      }
    }
  },
  components: {
    appLog: Log
  }
}
</script>

<style lang="scss" scoped>
</style>
