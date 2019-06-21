<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="container">
      <br><h1><font color="white">Ini Halaman Booking</font></h1><br>
    </div>
  </div>
</template>

<script>
import checkLogin from '@/mixins/checkLogin.js'
export default {
    name: 'Booking',
    mixins:[checkLogin]
  }
</script>
