<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="logo" to="/">
      <i class="fas fa-fire"></i>
      <span>RSCP</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item to="/ossec" active-class="active">OSSEC</b-nav-item>
        <b-nav-item to="/suricata" active-class="active">Suricata</b-nav-item>
        <b-nav-item to="/clamav" active-class="active">ClamAV</b-nav-item> -->
        <b-nav-item v-for="(el, index) in menu" :key="index" :to="el.to" active-class="active">{{ el.name }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  data () {
    return {
      menu: [{
        to: '/gateway',
        name: 'GATEWAY'
      }, {
        to: '/ids',
        name: 'IDS'
      }, {
        to: '/antivirus',
        name: 'ANTIVIRUS'
      }, {
        to: '/config',
        name: 'CONFIG'
      }, {
        to: '/dhcp',
        name: 'DHCP'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: white;
  font-weight: medium;
}

.logo {

  * {
    display: inline-block;
  }

  span {
    margin-left: 10px;
  }
}
</style>
