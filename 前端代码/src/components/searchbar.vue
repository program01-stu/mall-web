<!-- 搜索栏 -->
<template>
  <div class="search">
    <div class="searchbar">
      <div class="content">小米手机</div>
      <div class="button"></div>
    </div>
  </div>
</template>

<script>
export default {
name:'SearchBar',
  data () {
    return {
    };
  }
}

</script>
<style scoped>
.search{
  line-height: 100px;
  height: 100px;
}
.searchbar{
  margin-top: 25px;
  height: 50px;
  width: 297px;
  border: 1px solid #333;
  display: flex;
}
.content{
  line-height: 50px;
  padding: 0 5px;
  flex: 5;
}
.button{
  border-left: 1px solid #333;
  flex: 1;
}
</style>