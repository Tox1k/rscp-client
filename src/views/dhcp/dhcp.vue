<template>
<div class="container min-vw-100 h-100 px-3 py-3 bg-light">
  <app-log api="dhcp" name="Log" lines="100"></app-log>
  <b-card bg-variant="ligth" header="Network Settings" class="mt-3 text-left">

  </b-card>
</div>
</template>

<script>

import Log from '@/components/log/log'

export default {
  components: {
    appLog: Log
  }
}
</script>

<style lang="scss" scoped>
</style>
