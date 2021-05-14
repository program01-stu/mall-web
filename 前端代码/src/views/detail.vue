<!-- 详情 -->
<template>
  <div>
      <div class="detail">
          <div class="detailItem" v-for="(item,index) in goods" @click="toPay(item)">
              <div class="pic">
                  <img :src="item.photo" mode="widthFix">
              </div>
              <div class="goodName">
                  {{item.name}}
              </div>
              <div class="goodDetail">
                  {{item.information}}
              </div>
              <div class="goodPrice">
                  {{item.moneyon}}
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
        goods:this.$route.params.goods
    };
  },
  components: {},
  methods:{
      toPay(item){
          this.$router.push({
              name:"pay",
              params: {goodsDetail:item}
          })
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
.pic img{
    width: 160px;
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