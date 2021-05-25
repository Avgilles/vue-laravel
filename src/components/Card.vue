<template>
  <div class="card">
    <div class="card-img" :style="{backgroundImage: 'url(https://picsum.photos/seed/'+index+1+'/500/300'}"></div>
    <h2 v-text="item.name"></h2>
    <p v-text="item.description"></p>

    <button @click="$store.commit('DELETE_ARTICLES', index)">Supprimer</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    'item',
    'index'
  ],

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
