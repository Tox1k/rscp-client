<template>
<div class="container min-vw-100 h-100 px-3 py-3 bg-light">

  <b-card bg-variant="ligth" header="Network Settings" class="text-left">
    <b-card-text class="log" id="log">
      <b-form>
        <b-form-group label-cols-lg="3" label="Router" label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
          <b-form-group label="IP Address:" label-for="ip-address" description="Router IP Address">
            <b-form-input v-model="router" pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$" placeholder="Enter IP address" class="mr-2"></b-form-input>
          </b-form-group>
        </b-form-group>
        <b-form-group label-cols-lg="3" label="Network Address" label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
          <b-form-group label="From:" label-for="input-1" description="Network Address">
            <!-- <b-input-group prepend="From" class="mb-2 mr-sm-2 mb-sm-0"> -->
              <b-form-input v-model="network" pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$" placeholder="Enter Network Address" class="mr-2"></b-form-input>
            <!-- </b-input-group> -->
          </b-form-group>
          <b-form-group label="Subnet Mask" label-for="input-1" description="Subnet Mask">
            <!-- <b-input-group prepend="From" class="mb-2 mr-sm-2 mb-sm-0"> -->
              <b-form-input v-model="subnet" pattern="^([0-9]{1,3}\.){3}[0-9]{1,3}$" placeholder="Enter Subnet Mask" class="mr-2"></b-form-input>
            <!-- </b-input-group> -->
          </b-form-group>
          <b-form-group label="From:" label-for="input-1" description="DHCP Range">
            <b-input-group prepend="From" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input type="number" min="0" max="256" step="1" id="input-1" v-model="range.start" placeholder="Enter IP address" class="mr-2"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group label="To:" label-for="input-1" description="DHCP Range">
            <b-input-group prepend="To" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input type="number" min="0" max="256" step="1" v-model="range.end" placeholder="Enter IP address" class="mr-2"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-form-group>
        <b-button variant="success" @click="save">Save</b-button>
      </b-form>
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      router: '192.168.1.1',
      network: '192.168.1.0',
      subnet: '255.255.255.255',
      range: {
        start: 2,
        end: 255
      }
    }
  },
  methods: {
    async save () {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
