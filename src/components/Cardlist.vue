<template>
  <div class="card-container">
    <Card @delete-card="handleDelete(index)" :key="item.name" v-for="(item, index) in items" :item="item"/>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Cardlist",
  props: ['items', 'index'],
  components: {
    Card
  },
  methods: {
    handleDelete(index) {
      this.$emit("delete-card", index);
    }
  }
}
</script>

<style scoped>
.card-container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
</style>
