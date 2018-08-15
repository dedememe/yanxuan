<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import Msite from './pages/Msite/Msite'
export default {
  components: {
    FooterGuide,
    Msite
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  width 7.5rem
  padding 0
  margin 0
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding 0 0;
  margin 0 0;
  width 100%;
}
</style>
