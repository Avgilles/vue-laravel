<template>
  <div class="blog">
    <h1>All movies</h1>
    <Cardlist :items="movies"/>

  </div>
</template>

<script>
import Cardlist from "@/components/Cardlist";
import {mapState, mapActions} from "vuex";

export default {
  name: "Movies",
  components: {Cardlist},
  mounted(){
    this.getMovies();
  },
  computed: mapState([
    'movies'
  ]),
  methods: {
    ...mapActions({
      getMovies: 'GET_MOVIES'
    })
  }
}

</script>

<style scoped>

</style>
