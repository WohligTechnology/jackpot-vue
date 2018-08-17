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
  padding: 10px 10px 0;
}
.divider {
  width: 40%;
}
</style>
