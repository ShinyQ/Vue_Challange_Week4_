<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="container">
      <br><h1><font color="white">Ini Halaman Booking :)</font></h1><br>
      <DetailBooking></DetailBooking>
    </div>
  </div>
</template>

<script>
import DetailBooking from '@/components/DetailBooking.vue'
import checkLogin from '@/mixins/checkLogin.js'
export default {
    name: 'Booking',
    mixins:[checkLogin],
    components: {    
        DetailBooking
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
      float: right!important;
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
