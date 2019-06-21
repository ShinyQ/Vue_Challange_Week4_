<template>
  <div>
    <div class="container-fluid">
      <h1>Moviex Movies</h1>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
  h1{
    color: white;
  }
</style>
