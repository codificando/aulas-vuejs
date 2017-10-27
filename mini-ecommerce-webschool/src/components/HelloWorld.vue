<template>
  <div class="hello">
    <h1>Hello Word!</h1>
    <Intro/>
  </div>
</template>

<script>
import Intro from './Intro.vue'

export default {
  components: {
    Intro
  }
}
</script>

<!-- Add "scoped" limit CSS to this component only -->
<style scoped>
  h1 {
    font-size: 80px;
    color: green;                                 
  }
</style>
