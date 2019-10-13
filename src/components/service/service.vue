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
      <i class="fas fa-circle" style="color: #0FC47A;" v-if="service.status"></i>
      <i class="fas fa-circle" style="color: #FF4447;" v-else></i>
      <span> Status</span>
    </b-list-group-item>
  </b-list-group>

  <b-card-body>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </b-card-body>

  <b-card-footer>This is a footer</b-card-footer>
</b-card>
</div>
</template>

<script>
export default {
  props: ['service']
}
</script>

<style lang="scss" scoped>
</style>
