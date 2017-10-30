<template>
  <div class="phone-viewport">
    <md-toolbar>
      <h1 class="md-title">{{title}}</h1>
      <md-input-container md-inline>
        <md-input v-model="title" placeholder="Digite aqui"></md-input>
      </md-input-container>
    </md-toolbar>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      title: ''
    } 
  }
}
</script>

<style>
</style>
