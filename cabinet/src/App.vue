<template>
  <div class="">
    <div class="search-panel">
      <SearchPanel />
    </div>
    <div class="topics">
      <Topic v-for="topic in topics" :key="topic.id" :name="topic.name" :items="topic.items"/>
    </div>
    <div class="footer">
      <Footer :title="footer.title" :info="footer.info"/>
    </div>
  </div>
</template>

<script>
import Topic from './components/Topic.vue'
import SearchPanel from './components/SearchPanel.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Topic,
    SearchPanel,
    Footer
  },
  data(){
    return {
      topics: [],
      footer: {}
    }
  },
  mounted(){
    const data = require('../cabinet-data.json');
    this.topics = data.topics;
    this.footer = data.footer;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Pontano Sans', sans-serif;
}
.topics {
  background-color: #edeff2;
  padding-bottom: 90px;
}
.footer {
  background-color: #edeff2;
  padding-bottom: 90px;
}
</style>
