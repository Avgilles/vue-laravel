<template>
  <div>
    <h1>mon article</h1>
    <Card :item="movie" :index="movie.id" />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "ShowMovie",
  components: {Card},
  computed:{
    movie(){
      return this.$store.getters.GET_MOVIE(this.$route.params.id);
    }
  }
}
</script>

<style scoped>

</style>
