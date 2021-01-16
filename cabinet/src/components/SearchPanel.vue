<template lang="html">
  <div class="search-panel">
    <input v-model="searchText" type="text" name="" placeholder="Search..." @input="search">
    <div class="results">
      <Item v-for="item in results" :key="item.id" :id="item.id" :name="item.name" :icon="item.icon" :link="item.link"/>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  props: ["topics"],
  components: {
    Item,
  },
  data(){
    return {
      searchText: "",
      results: []
    }
  },
  computed:{
    taggedItems: function(){
      var items_ = []
      for (var topic of this.topics) {
        if(topic.items) {
          for (var i of topic.items) {
            if(i.tags) {
              for (var tag of i.tags) {
                items_.push(
                  {
                    tag: tag,
                    item: i
                  }
                )
              }
            }
          }
        }
      }
      return items_
    }
  },
  methods:{
    search(){
      if (!this.searchText) {
        this.results = []
        return;
      }
      var results_ = []
      for (var item of this.taggedItems){
        if (item.tag.includes(this.searchText)){
          results_.push(item.item)
        }
      }
      this.results = results_.slice(0,4)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
