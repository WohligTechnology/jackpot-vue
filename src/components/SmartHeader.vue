<template>
  <div class="header text-center">
    <img src="./../assets/images/full-header-poker.png" class="divider" v-if="value=='Poker'">
    <img src="./../assets/images/full-header-teenpatti.png" class="divider" v-if="value=='Teenpatti'">
  </div>
</template>

<script>
export default {
  name: 'smart-header',
  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding: 20px 10px;
}
.divider {
  width: 70%;
}
</style>
