<template>
        <tr>
        <td>{{ item.id }}</td>
        <td><img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" width="200px"></td>
        <td>{{ item.title }}</td>
        <td>{{ item.popularity }}</td> 
        <td>{{ item.vote_average }}</td>
        <td>{{ item.release_date }}</td>
        <td><router-link class="button button-detail" :to="{name:'detail',params:{id:item.id}}">Detail item</router-link></td>
        <!-- <td><a :href="item.url" target="_blank">{{item.url}}</a></td> -->
        </tr>

</template>

<script>
    export default {
        name: 'GetApi',
        props: {
            item: Object,
            index: Number
        },
    }
</script>