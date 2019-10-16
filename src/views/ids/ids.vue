<template>
  <div class="container min-vw-100 h-100 px-3 py-3 bg-light">
    <app-log api="ids" name="IDS" lines="100"></app-log>
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
