<template>
  <div class="home">
<!--    <TutorialComponent />-->
      <Cardlist  @delete-card="handleDelete" :items="homeitems" />
  </div>
</template>

<script>
// @ is an alias to /src
import Cardlist from "@/components/Cardlist";

export default {
  components: {
    Cardlist,
  },
  methods: {
    handleDelete(index) {
      this.homeitems.splice(index, 1);
    }
  },
  data(){
    return{
      homeitems : [
        {
          name: "Mon article home 1",
          description: "home 1"
        },
        {
          name: "Mon article home 2",
          description: "home 2"
        },
        {
          name: "Mon article 4",
          description: "home home 4"
        }, {
          name: "Mon article 5",
          description: "home home 5"
        }, {
          name: "Mon article 6",
          description: "home home 6"
        }, {
          name: "Mon article 7",
          description: "home home 7"
        }, {
          name: "Mon article 8",
          description: "home home 8"
        },
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
