<template>
   <div id="detail" style="margin-top:5%!important">
        <DetailFilm></DetailFilm>
  </div>
</template>

<script>
  import axios from 'axios'
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
  }
</script>
<style>
    .buttonOrder
    {
      float:right!important;
      color: #fff;
      background-color: #5cb85c;
      border-color: #4cae4c;
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
      width: 150px;
      font-size: 16px
    }

    .buttonOrder:hover{
      background: #5fe85f;
    }

    p{
      text-indent: 15px;
      text-align: justify
    }
    
    @media screen and (max-width: 600px) {
      .image{
        display:block;
        margin:auto;
      }
    }

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
