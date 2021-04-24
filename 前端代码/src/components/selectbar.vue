<!-- 中间搜索选项 -->
<template>
  <div class="selectbar">
      <ul>
         <li v-for="(item,index) in chooseItems"> 
             <a href="#">
                 {{item}}
             </a>
         </li>
      </ul>
  </div>
</template>

<script>
export default {
name:'SelectBar',
  data () {
    return {
        chooseItems:["小米手机","Redmi红米","电视","笔记本","家电","路由器","智能硬件","服务","社区"]
    };
  },

  components: {},
}

</script>
<style scoped>
.selectbar{
    height: 100px;

}
.selectbar ul li{
    display: inline-block;
    color: #333;
    font-size: 21px;
    margin: 0 10px;
    height: 100px;
    line-height: 100px;
}
a:hover{
    color: #ff6a00;
}
</style>