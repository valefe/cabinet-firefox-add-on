<template lang="html">
  <div class="search-panel">
    <input v-on:keyup.enter="goFirst" id="search-input" v-model="searchText" type="text" name="" placeholder="Search..." @input="search">
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
  mounted(){
    document.getElementById("search-input").focus();
  },
  methods:{
    search(){
      if (!this.searchText) {
        this.results = []
        return;
      }
      var results_ = []
      var results_names = []
      this.results = []
      for (var item of this.taggedItems){
        if (item.tag.includes(this.searchText)){
          console.log(item.item.name)
          console.log(results_names)
          console.log(results_)
          console.log(this.results)
          if (!results_names.includes(item.item.name)){
            results_.push(item.item)
            results_names.push(item.item.name)
          }
        }
      }
      this.results = results_.slice(0,4)
    },
    goFirst(){
      console.log("going to");
      console.log(this.results[0].link)
      console.log(this.results[0].target)
      /*global browser*/
      /*eslint no-undef: "error"*/
      browser.runtime.sendMessage({link: this.results[0].link});
      browser.browserAction.openPopup();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
