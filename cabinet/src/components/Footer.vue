<template lang="html">
  <div class="">
    <div class="title">
      {{ title }}
    </div>
    <div class="info">
      {{ info }}
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
    padding: 30px;
    padding-top: 10px;
}
.footer .title{
  padding-top: 20px;
  font-family: 'Heebo', sans-serif;
  font-size: 1.2em;
}
</style>
