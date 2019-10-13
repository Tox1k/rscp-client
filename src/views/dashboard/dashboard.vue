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
        name: 'Ossec',
        img: 'ossec.png',
        status: undefined,
        api: 'ossec'
      },
      {
        name: 'Suricata',
        img: 'suricata.png',
        status: undefined,
        api: 'suricata'
      },
      {
        name: 'ClamAV',
        img: 'clamav.png',
        status: undefined, // running, dead, error
        api: 'clamav'
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
