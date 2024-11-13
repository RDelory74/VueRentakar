<template>
  <div class="app">

    <HeaderNav />
    <router-view></router-view>
    <main class="main-content">
      <img class="logo" alt="Rentakar logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Rentakar"/>
    </main>
    <FooterNav />
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterNav from "@/components/FooterNav.vue";
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterNav,
    HelloWorld,
  }

}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Geneva, Arial, sans-serif;
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
  background: #6a869f;
  .logo {
    margin: 5% auto;
    border-radius: 20px
  }
}
</style>
