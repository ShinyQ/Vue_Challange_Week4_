<template>
        <div class="row">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <div>
                <router-link class="buttonDetail button-detail" to="/"><i style="color:white" class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;Kembali Ke Home</router-link>
                <h1>{{ films.title }}</h1>
                <div class="col-md-3">
                    <img class="image" :src="'https://image.tmdb.org/t/p/w500' + films.poster_path" width="250px">
                </div>
                <div class="col-md-9">
                    <h4>Rate : {{ films.vote_average }}</h4>
                    <h4>Vote : {{ films.vote_count }}</h4>
                    <h4>Popularitas : {{ films.popularity }}</h4>
                    <h4>Budget Film : ${{ films.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')  }} </h4>
                    <h4>Penghasilan Film : ${{ films.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</h4>
                    <h4>Produksi : {{ films.production_companies[0].name }}</h4>
                    <h4>Deskripsi :</h4> <p>{{ films.overview }}</p>
                </div>
                <button class="buttonOrder"><i style="color:white" class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Order Tiket</button>
            </div>
        </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'DetailFilm',
    props: {
            film: String,
    },
    computed:{
      films () {
        return this.$store.state.detail.data.films 
      }
    },
    
    mounted: function () {
       const id = this.$route.params.id
       this.$store.dispatch('detail/getFilms', id)
    }

  }
</script>