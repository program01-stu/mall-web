<template>
  <div id="app">
    <short-cut></short-cut>
    <div class="w">
      <choose-bar>
      <img slot="logo" style="width:56px" src="http://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="">
      <select-bar slot="selectbar"></select-bar>
      <search-bar slot="searchbar"></search-bar>
    </choose-bar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import ShortCut from './components/shortcut.vue'
import ChooseBar from './components/choosebar.vue'
import SelectBar from './components/selectbar.vue'
import SearchBar from './components/searchbar.vue'
export default {
  name: 'App',
  components:{
    ShortCut,
    ChooseBar,
    SelectBar,
    SearchBar
  }
}
</script>

<style>
@import url(./assets/css/normalize.css);
@import url(./assets/css/init.css);
.w{
  margin: 0 50px;
}
</style>
