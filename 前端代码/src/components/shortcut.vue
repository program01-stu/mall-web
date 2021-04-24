<!-- 快捷导航栏 -->
<template>
  <div class="shortcut">
      <div class="left">
          <ul>
              <li v-for="(item,index) in left_choose"><a href="#">{{item}}</a></li>
          </ul>
      </div>
      <div class="right">
           <ul>
              <li v-for="(item,index) in right_choose"><a href="#">{{item}}</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
name:'shortcut',
  data () {
    return {
        left_choose:["小米商城","MIUI","IoT","云服务","天星数科","有品","小爱开发平台","企业团购","资质证照","协议规则","下载app","智能生活","SelectLocation"],
        right_choose:["登陆","注册","消息通知","购物车"]
    };
  },
}

</script>
<style scoped>
.shortcut{
    height: 40px;
    width: 100%;
    background-color: #333333;
}
.shortcut li{
    color: #b0b0b0;
    display: inline-block;
    height: 40px;
    line-height: 40px;
}
.left{
    margin-left: 50px;
    float: left;
}
.right{
    margin-right: 50px;
    float: right;
}
a{
    padding:0 10px;
    border-right: 1px solid #b0b0b0;
}
ul li:last-child a{
    border-right: 0;
}
</style>