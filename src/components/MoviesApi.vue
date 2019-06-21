<template>
    <div class="col-md-3">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="card" style="min-height:480px; margin-bottom:10%;">
        <img class="image" style="margin: 0!important; padding: 0!important; max-width:500px; max-height:300px" :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" alt="Image Movies"><br>
        <div style="padding: 2%">
          <h4><b><center>{{ item.title }}</center></b></h4>
          <center><p><i style="color:#f49e42" class="fa fa-star" aria-hidden="true"></i> {{ item.vote_average }}</p></center>
          <router-link class="button button-detail" :to="{name:'detail',params:{id:item.id}}"><b>Detail item</b></router-link>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: 'MoviesApi',
        props: {
            item: Object,
            index: Number
        },
    }
</script>