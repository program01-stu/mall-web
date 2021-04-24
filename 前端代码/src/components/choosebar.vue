<!-- 选择框 -->
<template>
  <div class="choosebar">
      <div class="left">
          <slot name="logo"></slot>
      </div>
      <div class="center">
          <slot name="selectbar"></slot>
      </div>
      <div class="right">
          <slot name="searchbar"></slot>
      </div>
  </div>
</template>

<script>
export default {
name:'ChooseBar',
  data () {
    return {
    };
  },
}

</script>
<style scoped>
.choosebar{
    height: 100px;
    display: flex;
}
.left{
    line-height: 100px;
    flex: 2;
}
.center{
    line-height: 100px;
    margin-left: 60px;
    flex: 14;
}
.right{
    line-height: 100px;
    flex: 4;
}
</style>