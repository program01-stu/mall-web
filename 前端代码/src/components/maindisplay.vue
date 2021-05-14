<!-- 展示目录 -->
<template>
  <div class="maindisplay" @mouseleave="mouseLeave()">
      <div class="category">
          <ul>
              <!-- <a v-for="(item,index) in types" @click="toDetail(displays)"><li @mouseenter="mouseover(index,paths[index])" :class="{active: index === currentIndex}" @mouseleave="mouseLeave(paths[index])">{{item}}</li></a> -->
              <a v-for="(item,index) in types" @click="toDetail(displays)"><li @mouseenter="mouseover(index,paths[index])" :class="{active: index === currentIndex}">{{item}}</li></a>
          </ul>
      </div>
      <div class="goods">
          <!-- <slot>123456</slot>采用路由的加载方式复用性高 -->
          <!-- 直接选择展示不同的数据 使得代码更加的简单 -->
           <swiper :options="swiperOption" ref="mySwiper"  v-if="this.currentIndex===-1">
            <swiper-slide><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/808804e4f58a25704f60bdc5b5e75cfd.jpg?w=2452&h=920" alt=""></swiper-slide>
            <swiper-slide><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5ebb3ecd10ba5b5f1fa25125d034492.jpg?thumb=1&w=1226&h=460" alt=""></swiper-slide>
            <swiper-slide><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/808804e4f58a25704f60bdc5b5e75cfd.jpg?w=2452&h=920" alt=""></swiper-slide>
            <swiper-slide><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/175b22f0032803f8bdbd94590c8c6629.jpeg?thumb=1&w=1226&h=460" alt=""></swiper-slide>
            <swiper-slide><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/808804e4f58a25704f60bdc5b5e75cfd.jpg?w=2452&h=920" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="goodItem" v-for="(item,index) in displays" v-else>
              <a @click="toPay(item)"><img :src="item.photo" alt="" mode="widthFix">{{item.information?item.information:"小米产品"}}</a>
          </div>
      </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import 'swiper/swiper-bundle.css'
export default {
name:'MainDisplay',
  data () {
    return {
        currentIndex:-1,
        swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
         pagination: {
            el: '.swiper-pagination'
          },
      }
    };
  },
  methods:{
      mouseover(index,path){
           this.currentIndex = index;
        //   this.$router.replace(path)
           this.$emit("getDisplays",path);
      },
      mouseLeave(){
          this.currentIndex = -1;
      },
      //跳转到支付页面
      toPay(item){
          this.$router.push(
          {
              name:"pay",
              params: {goodsDetail:item}
          
          });
          
      },
      //跳转到大图展示
      toDetail(item){
          this.$router.push({
              name:'detail',
              params:{goods:item}
          })
      }
  },
  components:{
      swiper,
      swiperSlide
  },
   props: {
      displays: {
        type: Array,
        default() {
          return []
        }
      },
      types:{
          type:Array,
          default:[]
      },
      paths:{
          type:Array,
          default:[]
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
    color: black;
    width: 240px;
    height: 50px;
}
.goodItem img{
    width: 40px;
}
.active{
    background-color: #ff6700;
}
a:hover{
    color: #ff6700;
}
.swiper-slide img{
    height: 460px;
    width: 100%;
}
</style>