<template>
<div>
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

export default {
  components: {
    appMenu: Menu
  }
}
</script>
