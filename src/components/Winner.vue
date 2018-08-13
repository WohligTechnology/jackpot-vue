<template>
  <div>
    <span>Winners</span>
    <span>{{value.name}}</span>
    <span>{{value.prizeMoney}}</span>
    <span>Pocket {{value.pocketNumber}}</span>
    <span>Table {{value.tableNumber}}</span>
    <span>{{value.date}}</span>
  </div>
</template>

<script>
export default {
  name: 'winner',
  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
