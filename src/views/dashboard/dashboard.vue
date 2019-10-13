<template>
  <div class="container min-vw-100 h-100 px-3 py-3 bg-light">
    <b-card-group deck class="d-flex justify-content-center h-100">
      <app-service :service="services.ossec"></app-service>
      <app-service :service="services.suricata"></app-service>
      <app-service :service="services.clamav"></app-service>
    </b-card-group>
  </div>
</template>

<script>

import Service from '@/components/service/service'

export default {
  data () {
    return {
      services: {
        ossec: {
          name: 'Ossec',
          img: 'ossec.png',
          status: true
        },
        suricata: {
          name: 'Suricata',
          img: 'suricata.png',
          status: true
        },
        clamav: {
          name: 'ClamAV',
          img: 'clamav.png',
          status: true
        }
      }
    }
  },
  components: {
    appService: Service
  }
}
</script>

<style lang="scss" scoped>
</style>
