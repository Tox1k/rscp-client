<template>
  <div class="container min-vw-100 h-100 px-3 py-3 bg-light">
    <app-log api="collector" name="Collector" lines="100"></app-log>
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
.container {
  width: 100%;
  max-height: 500px;
}
</style>
