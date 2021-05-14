<!-- 支付页面 -->
<template>
  <div class="pay">
      <div class="pic">
          <img :src="this.goodsDetail.photo" alt="">
      </div>
      <div class="content">
          <div class="title">
              {{this.goodsDetail.information}}
          </div>
          <div class="describe">
             <font color="#ff4f08">{{this.goodsDetail.buydetails}}</font>{{this.goodsDetail.details}}
          </div>
          <div class="source">
              {{this.goodsDetail.private}}
          </div>
          <div class="price">
              {{this.goodsDetail.moneyon}}
          </div>
                    <div class="countdown">
                        <div class="countdown_left">
                            <span style="font-size: 14px;">预约中</span>
                            <span style="font-size: 22px;">￥3999</span>
                        </div>
                        <div class="countdown_right">
                            <span>距结束</span>
                            <ul>
                                <li>15</li>
                                <li>:</li>
                                <li>02</li>
                                <li>:</li>
                                <li>28</li>
                            </ul>
                        </div>
                    </div>

                    <div class="address">
                        <div class="real_address">北京  北京市  海淀区  青海街道  <a>修改</a></div>
                        <div class="have_good">该地区暂时缺货</div>
                    </div>
                    <div class="goodType">
                        <div class="version">
                            <div class="descript">
                                选择版本
                            </div>
                            <div class="version_type">
                                <ul>
                                    <li>8G+128G</li>
                                    <li>8G+128G</li>
                                    <li>8G+128G</li>
                                </ul>
                            </div>
                        </div>
                        <div class="type_color">
                            <div class="descript">
                                选择颜色
                            </div>
                            <div class="version_type">
                                <ul>
                                    <li>谋害黑</li>
                                </ul>
                            </div>
                        </div>
                        <div class="insure">
                            <div class="descript">
                                <span>选择小米提供的保险</span><span>了解意外保护></span>
                            </div>
                            <div class="insure_type">
                                <ul>
                                    <li>
                                        <div class="radio_pic"><input type="radio"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1616422671.54999216.png" alt=""></div>
                                        <div class="insure_descript">
                                            <em>碎屏保障服务</em><span class="insure_price">299元</span>
                                            <h4>手机意外碎屏</h4>
                                            </br>
                                            <input type="checkbox"><span>我已阅读<a>服务条款</a><a>|  常见问题</a></span><span>299元</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="yun_space">
                            <div class="descript">
                                <span>选择小米的云空间</span><span>了解云空间></span>
                            </div>
                            <div class="insure_type">
                                <ul>
                                    <li>
                                        <div class="radio_pic"><input type="radio"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1616422671.54999216.png" alt=""></div>
                                        <div class="insure_descript">
                                            <em>碎屏保障服务</em><span class="insure_price">299元</span>
                                            <h4>手机意外碎屏</h4>
                                            </br>
                                            <input type="checkbox"><span>我已阅读<a>服务条款</a><a>|  常见问题</a></span><span>299元</span>
                                        </div>
                                    </li>
                                </ul>  
                            </div>
                            <div class="insure_type">
                                <ul>
                                    <li>
                                        <div class="radio_pic"><input type="radio"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1616422671.54999216.png" alt=""></div>
                                        <div class="insure_descript">
                                            <em>碎屏保障服务</em><span class="insure_price">299元</span>
                                            <h4>手机意外碎屏</h4>
                                            </br>
                                            <input type="checkbox"><span>我已阅读<a>服务条款</a><a>|  常见问题</a></span><span>299元</span>
                                        </div>
                                    </li>
                                </ul>
                           
                           
                            </div>
                            <div class="insure_type">
                                <ul>
                                    <li>
                                        <div class="radio_pic"><input type="radio"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1616422671.54999216.png" alt=""></div>
                                        <div class="insure_descript">
                                            <em>碎屏保障服务</em><span class="insure_price">299元</span>
                                            <h4>手机意外碎屏</h4>
                                            </br>
                                            <input type="checkbox"><span>我已阅读<a>服务条款</a><a>|  常见问题</a></span><span>299元</span>
                                        </div>
                                    </li>
                                </ul>
                           
                           
                            </div>
                        </div>
                        <div class="total_price"></div>
                    </div>
                    <div class="buyButton"></div>
      </div>
  </div>
</template>

<script>
export default {
name:'Pay',
  data () {
    return {
        goodsDetail:this.$route.params.goodsDetail
    };
  },
  components: {},
  methods:{
       show(){
          console.log(this.goodsDetail)
      }
  },
  mounted(){
     this.show();
  }
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
.descript{
    font-size: 21px;
    margin: 10px 0;
}
.version_type{

}
.version_type ul::after{
   content: "";
   display: block;
   height: 0;
   clear: both;
   visibility: hidden;
}
.version_type ul li{
    display: inline-block;
    width: 292px;
    height: 42px;
    border: 1px solid #e0e0e0;
    margin: 10px 0;
    text-align: center;
    line-height: 42px;
    font-size: 21px;
}
.version_type ul li:nth-child(odd){
    float: left;
}
.version_type ul li:nth-child(even){
    float: right;
}
.type_color{

}
.countdown{
    margin: 20px 0;
    height: 52px;
    background-image: linear-gradient(to right, #ff5f04 , #ff2814);
    color: #ffff;
    line-height: 52px;
    padding: 0 10px;
}
.countdown_left{
    float: left;
}
.countdown_right{
    float: right;
}
.countdown_right ul li{
    height: 18px;
    width: 18px;
    display: inline-block;
    text-align: center;
}
.countdown_right ul{
    display: inline-block;
}
.countdown_right ul li:nth-child(odd){
    line-height: 18px;
    background-color: #c20000;
}
.address{
    font-size: 14px;
    height: 104px;
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    padding: 30px 15px;
}
.real_address{
}
.real_address a{
    color: #ff4f08;
}
.have_good{
    color: #ff4f08;

}
.insure .descript::after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
 .descript span:last-child{
    color: #ff4f08;
    font-size: 14px;
    float: right;
}
.insure .descript span:first-child{
    float: left;
}
.insure_type ul li{
    height: 145px;
    border: 1px  solid #e0e0e0;
}
.insure_type input[type=radio]{
    margin-top: 40px;
    margin-left: 40px;
}
.insure_type img{
    vertical-align:center;
    width: 50px;
    height: 50px;
}
.insure_type em{
    color: black;
    font-weight: 900;
    font-size: 18px;
}
.insure_price{
    display: inline-block;
    color: #fafafa;
    width: 50px;
    height: 25px;
    border-radius: 25px;
    background-color: #ff6700;
    line-height: 25px;
    text-align: center;
}
.radio_pic{
    display: inline-block;
    margin-bottom: 40px;
}
.insure_descript{
    display: inline-block;
    margin-top: 40px;
}
</style>