<template>
  <div class="align-self-center">
<b-card
  no-body
  style="max-width: 15rem;"
  :img-src="'/images/services/' + service.img"
  img-alt="Image"
  img-top
>
  <template v-slot:header>
    <h4 class="mb-0">{{ service.name }}</h4>
  </template>

  <!-- <b-card-body>
    <b-card-title>Card Title</b-card-title>
    <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </b-card-text>
  </b-card-body> -->

  <b-list-group flush>
    <b-list-group-item>
      <i class="fas fa-circle" style="color: #0FC47A;" v-if="service.status === 'running'"></i>
      <i class="fas fa-circle" style="color: #F3A32A;" v-if="service.status === 'error'"></i>
      <i class="fas fa-circle" style="color: #FF4447;" v-if="service.status === 'dead'"></i>
      <span> Status</span>
    </b-list-group-item>
  </b-list-group>

  <b-card-body>
    <b-button-group size="sm">
    <b-button href="#" variant="success" v-if="service.status === 'error'">Start</b-button>
    <b-button href="#" variant="danger" v-if="service.status === 'running'">Stop</b-button>
    <b-button href="#" variant="warning">Restart</b-button>
  </b-button-group>
  </b-card-body>

  <b-card-footer>
    <b-link :to="'/' + service.api" class="card-link">Configure</b-link>
  </b-card-footer>
</b-card>
</div>
</template>

<script>

import v1 from '@/utils/v1'

export default {
  props: ['service'],
  async created () {
    await this.getStatus()
  },
  methods: {
    async getStatus () {
      const { data: { status } } = await v1.get('/services/' + this.service.api + '/status')
      this.$emit('status', status)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
