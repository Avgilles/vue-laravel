<template>
  <div class="blog">
    <h1>All movies</h1>
    <Loader v-if="$store.state.loading"/>
    <Cardlist :items="movies"/>

  </div>
</template>

<script>
import Cardlist from "@/components/Cardlist";
import {mapState, mapActions} from "vuex";
import Loader from "@/components/Loader";

export default {
  name: "Movies",
  components: {Loader, Cardlist},
  mounted() {
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
