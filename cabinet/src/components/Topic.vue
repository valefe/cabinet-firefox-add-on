<template lang="html">
  <div class="topic">
    <div class="title">
      {{ name }}
    </div>
    <div class="items">
      <Item class="item" v-for="item in items" :key="item.id" :name="item.name" :icon="item.icon" :link="item.link"/>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: ["name", "items"],
  components: {
    Item
  }
}
</script>

<style lang="css" scoped>
.topic{
  padding-top: 10px;
}
.topic .title{
  margin-top: 6px;
  margin-bottom: 5px;
  font-family: 'Heebo', sans-serif;
  font-size: 1.2em;
}
</style>
