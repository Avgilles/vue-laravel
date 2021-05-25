<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Cardlist @delete-card="handleDelete" :items="newitems"/>
  </div>
</template>

<script>
import Cardlist from "@/components/Cardlist";

export default {
  components: {Cardlist},
  methods: {
    handleDelete(index) {
      this.newitems.splice(index, 1);
    }
  },
  data() {
    return {
      newitems: [
        {
          name: "Mon article about 1",
          description: "about 1"
        },
        {
          name: "Mon article about 2",
          description: "about 2"
        },
        {
          name: "Mon article 3",
          description: "about about 3"
        },
      ]
    }
  },

}
</script>
