<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon button" v-on:click.native="toggleLeftSide">
        <md-icon>menu</md-icon>
      </md-button> 
      <h1 class="md-title">{{title}}</h1>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
        <md-toolbar class="md-medium">
          <div class="md-toolbar-container">
            <md-button class="md-icon button" @click.native="toggleLeftSidenav">
              <md-icon>menu</md-icon>
            </md-button>
            <h2 class="md-title">Sidenav content</h2>
          </div>
        </md-toolbar>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra magna at urna semper, quis aliquet purus vestibulum. Etiam aliquet arcu nibh, imperdiet placerat lorem pharetra non. Aenean faucibus nisi nisi, dapibus facilisis ligula pretium sit amet.</p>
    </md-sidenav>
  </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      title: 'E-commerce'
    } 
  },

  methods:{
    toggleLeftSide: function() {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style>
</style>
