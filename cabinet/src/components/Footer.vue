<template lang="html">
  <div class="">
    <div class="title">
      {{ title }}
    </div>
    <div class="info">
      {{ info }}
      <span class="center">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "info"]
}
</script>

<style lang="css" scoped>
.footer .info{
    margin: 10px;
    padding-top: 10px;
}
.footer .title{
  padding-top: 20px;
  font-family: 'Heebo', sans-serif;
  font-size: 1.2em;
}
</style>
