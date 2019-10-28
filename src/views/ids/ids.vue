<template>
<div class="container min-vw-100 h-100 px-3 py-3 bg-light">
  <app-log api="ids" name="Log" lines="100"></app-log>
  <b-card bg-variant="ligth" header="Update Signature" class="mt-3 text-left">
    <div class="d-flex justify-content-between align-items-center h-100">
      <b-form-text tag="large" variant="black" class="align-self-center">
        Last updated: {{ updated }}
      </b-form-text>
      <b-button variant="primary" @click="update">Update</b-button>
    </div>
  </b-card>
</div>
</template>

<script>
import Log from '@/components/log/log'

export default {
  data () {
    return {
      updated: undefined
    }
  },
  methods: {
    async update () {

    }
  },
  components: {
    appLog: Log
  }
}
</script>

<style lang="scss" scoped>
</style>
