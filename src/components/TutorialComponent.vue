<template>
  <div>
    <img v-show="showlogo" alt="Vue logo" src="../assets/logo.png">

    <input type="text" v-model="message"><br>

    <div v-html="message">{{ message }}</div>

    <ul>
      <li :key="item" v-for="item in items"><strong>{{ item.name }}:</strong> {{item.qty}}
        <br> <span v-if="item.available">
            <i>(disponible)</i>
          </span>
        <span v-else>
            <i>(non disponible)</i>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TutorialComponent",
  data() {
    return {
      'message': '',
      'showlogo': true,
      'items': [
        {
          name: 'Armoire',
          qty: '10',
          available: true
        },
        {
          name: 'Lit',
          qty: '0',
          available: false
        },
        {
          name: 'test3',
          qty: '10',
          available: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
