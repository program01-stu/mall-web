<!-- 首页 -->
<template>
  <div>
    <main-display
      :displays="displays"
      :types="types"
      :paths="paths"
      @getDisplays="getDisplays"
    >
    </main-display>
  </div>
</template>

<script>
import MainDisplay from "../components/maindisplay.vue";
import {
  getAllPhones,
  getAllElectrical,
  getAllNotebook,
  getAllOutdoor,
  getAllIntelligence,
  getAllPowerSupply,
  getAllHeadset,
  getAllLive,
  getAllHealthy,
} from "../network/index.js";
export default {
  name: "Index",
  data() {
    return {
      displays: [],
      //这些数据后台还没给 按道理以后应该也是通过后台传送过来的
      types: [
        "手机 电话卡",
        "电视 盒子",
        "笔记本 显示器",
        "家电 插线板",
        "出行 穿戴",
        "智能 路由器",
        "电源 配件",
        "健康 儿童",
        "耳朵 音响",
        "生活 箱包",
      ],
      paths: [
        "phone",
        "TV",
        "computer",
        "household",
        "clothes",
        "routers",
        "electrity",
        "health",
        "audio",
        "bag",
      ],
    };
  },
  components: {
    MainDisplay,
  },
  methods: {
    //获取当前激活的目录获取相应的数据进行展示
    getDisplays(path) {
      switch (path) {
        case this.paths[0]:
          getAllPhones().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[1]:
          getAllElectrical().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[2]:
          getAllNotebook().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[3]:
          getAllOutdoor().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[4]:
          getAllIntelligence().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[5]:
          getAllPowerSupply().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[6]:
          getAllHeadset().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[7]:
          getAllLive().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[8]:
          getAllHealthy().then((res) => {
            this.displays = res;
          });
          break;
        case this.paths[9]:
          getAllPhones().then((res) => {
            this.displays = res;
          });
          break;
        default:
          break;
      }
    },
  },
  created() {},
};
</script>
<style scoped>
</style>