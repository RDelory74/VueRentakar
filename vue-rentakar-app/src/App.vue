<template>
  <div id="app">

    <HeaderNav />
    <router-view></router-view>
    <FooterNav />

  </div>

</template>

<script>
import FooterNav from "@/components/FooterNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterNav,
  }

}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #000000;
}
#app {
  font-family: Geneva, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: #6a869f;
}

.logo {
    margin: 5% auto;
    border-radius: 20px
  }
</style>