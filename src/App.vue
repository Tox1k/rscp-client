<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nprogress {
    position: fixed;
    top: 0;
    z-index: 100000000;
    width: 100vw;
    outline: none;

    .bar {
        height: 0.2rem;
        background: linear-gradient(to right, #ed213a, #93291e);
        outline: none;
    }

}

.nprogress-container {
  position: fixed;
}

</style>
