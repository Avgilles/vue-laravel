<template>

  <router-link class="card" :to="{name: 'ShowMovie', params :{id: item.id}}">
    <div class="card-img" :style="img"></div>
    <h2 v-text="item.name"></h2>
    <p v-text="item.description"></p>

    <button @click="$store.commit('DELETE_MOVIES', index)">Supprimer</button>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: [
    'item'
  ],
  computed: {
    img(){
      return {backgroundImage: 'url(https://picsum.photos/seed/'+this.item.id+'/500/300'}
    }
  }

}
</script>

<style scoped>

.card {
  min-width: 200px;
  border: 1px solid black;
  text-align: center;
  margin: 20px;
}

.card-img {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
