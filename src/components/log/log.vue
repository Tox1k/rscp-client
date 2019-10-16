<template>
  <b-card bg-variant="dark" :header="name" text-variant="white" class="text-left">
    <b-card-text class="log" id="log">
      <span class="line" v-for="(log, index) in logs" :key="index">
        {{ log }}<br/>
      </span>
    </b-card-text>
  </b-card>
</template>

<script>

import v1 from '@/utils/v1'

export default {
  props: ['api', 'lines', 'name'],
  data () {
    return {
      logs: ''
    }
  },
  async created () {
    await this.getLogs()

    const log = document.getElementById('log')
    log.scrollTop = log.scrollHeight
  },
  methods: {
    async getLogs () {
      const { data: { log } } = await v1.get('/' + this.api + '/log', {
        params: {
          lines: this.lines
        }
      })
      this.logs = log.split('\n')
    }
  }
}
</script>

<style lang="scss" scoped>
.log {
    overflow: scroll;
    max-height: 50vh;
    overflow-x:hidden;

    .line {
      display: block;
      padding-bottom: 10px;
    }
}
</style>
