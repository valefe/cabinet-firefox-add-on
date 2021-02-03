<template lang="html">
  <div class="item tooltip" @click="goTo">
    <img :src="icon" alt="">
    <span class="tooltiptext">{{name}}</span>
  </div>
</template>

<script>
export default {
  props: ["id", "icon", "link", "name"],
  methods: {
    goTo(){
      /*global browser*/
      /*eslint no-undef: "error"*/
      browser.runtime.sendMessage({link: this.link});
    }
  }
}
</script>

<style lang="css" scoped>
.item{
  background-color: white;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  display: inline-block;
  width: 42px;
  height: 42px;
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
