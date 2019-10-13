<template>
<div class="route">
  <app-menu></app-menu>
  <!-- <transition name="panel" mode="out-in"> -->
  <keep-alive>
    <router-view/>
  </keep-alive>
<!-- </transition> -->
</div>
</template>

<script>

import Menu from '@/components/menu/menu'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  components: {
    appMenu: Menu
  }
}
</script>

<style lang="scss" media="screen">
.route {
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content auto;
}
</style>
