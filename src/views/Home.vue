<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="container">
      <br><h1><font color="white">Moviex Movies</font></h1><br>
      <div class="row">
        <MoviesApi v-for="(item, index) in films"  :key="index" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import checkLogin from '@/mixins/checkLogin.js'
// @ is an alias to /src
import MoviesApi from '@/components/MoviesApi.vue'

export default {
    name: 'home',
    components: {    
      MoviesApi
    },
    computed:{
      films () {
        return this.$store.state.home.data.films 
      }
    },
    mounted: function () {
       console.log(this.$store.dispatch('home/getFilms'))
       this.$store.dispatch('home/getFilms')
    },
    mixins:[checkLogin]
  }
</script>
