<template>
   <div id="detail" style="margin-top:5%!important">
        <router-link class="buttonDetail button-detail" to="/"><- Kembali Ke Home</router-link>
        <DetailFilm></DetailFilm>
  </div>
</template>

<script>
  import axios from 'axios'
  import checkLogin from '@/mixins/checkLogin.js'
  import DetailFilm from '@/components/DetailFilm.vue'
  export default {
    name: 'Detail',
    components: {    
        DetailFilm
    },
    data: function () {
        return {
            films:[] 
        }
    },
    mixins:[checkLogin] 
  }
</script>
<style>
    .back{
        text-decoration: none!important;
    }
    #detail {
    width: 70%;
    margin: 0 auto;
    background-color: #FFF;
    padding: 20px 40px;
    border: solid 1px black;
    margin-top: 20px;
    position: relative;
    font-family: Verdana, Helvetica, Arial;
  }

  .buttonDetail {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;  
  }

  .buttonDetail:hover{
    text-decoration: none;
    background: #00475f
  }
</style>
