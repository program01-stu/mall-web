<!-- 详情 -->
<template>
  <div>
      <div class="detail">
          <div class="detailItem" v-for="(item,index) in 24" @click="toPay(item)">
              <div class="pic">
                  <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200" alt="">
              </div>
              <div class="goodName">
                  小米MIX FOLD
              </div>
              <div class="goodDetail">
                  折叠大屏 | 自研芯片
              </div>
              <div class="goodPrice">
                  9999元起
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'Detail',
  data () {
    return {

    };
  },
  components: {},
  methods:{
      toPay(item){
          this.$router.replace("pay")
      }
  }
}

</script>
<style scoped>
.detail{
    background-color: #f5f5f5;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.detailItem{
    margin: 10px 0;
    background-color: #fff;
    height: 300px;
    width: 234px;

}
.pic{
    text-align: center;
}
.goodName{
    text-align: center;
    color: black;

}
.goodDetail{
    text-align: center;

}
.goodPrice{
    text-align: center;
    color: #ff6a00;
}
</style>