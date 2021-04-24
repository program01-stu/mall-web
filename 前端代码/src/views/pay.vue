<!-- 支付页面 -->
<template>
  <div class="pay">
      <div class="pic">
          <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1617098700.31877799.jpg" alt="">
      </div>
      <div class="content">
          <div class="title">
              MIX FOLD 折叠屏手机
          </div>
          <div class="describe">
             <font color="#ff4f08">「4月16日上午10点首销；最高享12期免息；买赠小米环保袋；全款预售用户4月16日发货」</font>''折叠大屏｜澎湃C1自研专业影像芯片｜液态镜头｜1亿像素｜骁龙888｜67W快充｜5020mAh超大电池｜LPDDR5满血版｜WiFi6（增强版）｜哈曼卡顿立体声四扬声器
          </div>
          <div class="source">
              小米自营
          </div>
          <div class="price">
              10999元
          </div>
          <div class="countdown"></div>
          <div class="address"></div>
          <div class="goodType"></div>
          <div class="buyButton"></div>
      </div>
  </div>
</template>

<script>
export default {
name:'Pay',
  data () {
    return {
    };
  },

  components: {}
}

</script>
<style scoped>
.pay{
    display: flex;
}
.pic{
    flex: 1;
}
.pic img{
    width: 100%;
}
.content{
    flex: 1;
}
.title{
        font-size: 24px;
        font-weight: 400;
        color: black;
}

.describe{
    font-size: 14px;
    color: #b0b0b0;
}
.source{
    color: #ff4f08;
}
.price{
    color: #ff4f08;
    font-size: 18px;
}
.countdown{

}
.address{

}
.goodType{

}
.buyButton{

}
</style>