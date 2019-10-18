<template>
  <div class="container min-vw-100 h-100 px-3 py-3 bg-light">
    <b-card-group deck class="d-flex justify-content-center h-100">
      <app-service v-for="(service, index) in services" :key="index" :service="service" @status="service.status = $event"></app-service>
    </b-card-group>
  </div>
</template>

<script>

import Service from '@/components/service/service'

export default {
  data () {
    return {
      services: [{
        name: 'GATEWAY',
        img: 'ossec.png',
        status: undefined,
        api: 'collector'
      },
      {
        name: 'IDS',
        img: 'suricata.png',
        status: undefined,
        api: 'ids'
      },
      {
        name: 'ANTIVIRUS',
        img: 'clamav.png',
        status: undefined, // running, dead, error
        api: 'antivirus'
      }]
    }
  },
  components: {
    appService: Service
  }
}
</script>

<style lang="scss" scoped>
</style>
