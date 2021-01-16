<template lang="html">
  <div class="topic">
    <div class="title">
      {{ name }}
    </div>
    <div class="items">
      <div class="item" v-for="item in items" :key="item.id" @click="goTo(item.link)">
        <img :src="item.icon" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "items"],
  methods: {
    goTo(link){
      /*global browser*/
      /*eslint no-undef: "error"*/
      browser.runtime.sendMessage({link: link});
    }
  }
}
</script>

<style lang="css" scoped>
.topic{
  padding: 10px;
  position: relative;
}
.topic .title{
  margin: 6px;
  font-family: 'Heebo', sans-serif;
  font-size: 1.2em;
}
.item{
  background-color: white;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  display: inline-block;
  width: 60px;
  height: 60px;
  -webkit-box-shadow: 18px 18px 105px -29px rgba(107,117,153,1);
  -moz-box-shadow: 18px 18px 105px -29px rgba(107,117,153,1);
  box-shadow: 18px 18px 105px -29px rgba(107,117,153,1);
}
.item img{
  height: 70%;
  width: 70%;
  margin: 0 auto;
  margin-top: 15%;
}
</style>
