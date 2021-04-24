<!-- 展示目录 -->
<template>
  <div class="maindisplay">
      <div class="category">
          <ul>
              <li  v-for="(item,index) in types" @mouseenter="mouseover(index,paths[index])" :class="{active: index === currentIndex}" @mouseleave="mouseLeave(paths[index])"><a href="#">{{item}}</a></li>
          </ul>
      </div>
      <div class="goods">
          <!-- <slot>123456</slot>采用路由的加载方式复用性高 -->
          <!-- 直接选择展示不同的数据 使得代码更加的简单 -->
          <div class="goodItem" v-for="(item,index) in 24">
              <a href="detail" @click="toDeatil(item)"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png?thumb=1&w=40&h=40" alt="">小米笔记本电脑</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'MainDisplay',
  data () {
    return {
        types:["手机 电话卡","电视 盒子","笔记本 显示器","家电 插线板","出行 穿戴","智能 路由器","电源 配件","健康 儿童","耳朵 音响","生活 箱包"],
        paths:["phone","TV","computer","household","clothes","routers","electrity","health","audio","bag"],
        currentIndex:0
    };
  },
  methods:{
      mouseover(index,path){
           this.currentIndex = index;
        //   this.$router.replace(path)
      },
      mouseLeave(path){

      },
      toDeatil(item){
         // this.$router.replace("detail")
      }
  }
}

</script>
<style scoped>
.maindisplay{
    height: 460px;
    box-shadow:rgba(87, 97, 124, 0.3) 1px 1px 1px 1px;
}
.category{
    padding: 24px 0;
    height: 460px;
    float: left;
    width: 20%;
    
    background-color: #57617c;
}
.category ul li{
    color: aliceblue;
    line-height: 42px;
    height: 42px;
    padding: 0 20px;
}
.category ul li:hover{
    background-color: #ff6700;
}
.category ul li a{
    color: aliceblue;
}
.goods{
    background-color:#fff;
    height: 460px;
    width: 80%;
    float: left;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
}
.goodItem{
    text-align: center;
    width: 240px;
    height: 50px;
}
.active{
    background-color: #ff6700;
}
</style>