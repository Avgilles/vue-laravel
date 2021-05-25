<template>
  <div class="blog">
    <h1>Blog</h1>
    <Cardlist :items="articles"/>

  </div>
</template>

<script>
import Cardlist from "@/components/Cardlist";
import {mapState} from "vuex";

export default {
  name: "Blog",
  components: {Cardlist},
  computed: mapState({
    articles: 'GET_PUBLISHED_ARTICLES'
  }),
}
</script>

<style scoped>

</style>
