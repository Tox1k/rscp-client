<template>
<div class="align-self-center">
  <b-card no-body style="max-width: 15rem;" :img-src="'/images/services/' + service.img" img-alt="Image" img-top>
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
        <div class="status" :style="'background-color:' + color + ';'"></div>
        <span> {{ status }}</span>
      </b-list-group-item>
    </b-list-group>

    <b-card-body>
      <b-button-group size="sm">
        <b-button href="#" variant="success" v-if="service.status === 'error' || service.status === 'dead'" @click="setStatus('start')">Start</b-button>
        <b-button href="#" variant="danger" v-if="service.status === 'running'" @click="setStatus('stop')">Stop</b-button>
        <b-button href="#" variant="warning" @click="setStatus('restart')">Restart</b-button>
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
  computed: {
    color () {
      let color = '#0FC47A'
      if (this.service.status === 'running') {
        color = '#0FC47A'
      } else if (this.service.status === 'error') {
        color = '#F3A32A'
      } else {
        color = '#FF4447'
      }
      return color
    },
    status () {
      return this.service.status[0].toUpperCase() + this.service.status.slice(1)
    }
  },
  methods: {
    async getStatus () {
      try {
        const {
          data: {
            status
          }
        } = await v1.get('/services/' + this.service.api + '/status')
        return this.$emit('status', status)
      } catch (e) {
        alert('Impossibile reperire lo status del servizio.')
      }
    },
    async setStatus (command) {
      try {
        const {
          data: {
            status
          }
        } = await v1.post('/services/' + this.service.api + '/execute', {
          command
        })
        return this.$emit('status', status)
      } catch (e) {
        alert('Si è verificato un errore nel settare lo status del servizio.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  height: 15px;
  width: 15px;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
}
</style>
