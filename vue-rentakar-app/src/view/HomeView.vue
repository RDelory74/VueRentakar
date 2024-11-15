<script>
import HelloWorld from '../components/HelloWorld.vue'
import SearchPod from "@/components/SearchPod.vue";
export default {
  name: 'HomeView',
  components: {
    SearchPod,
    HelloWorld,
  }
}
</script>

<template>
  <main class="main-content">
    <div class="content-container">
      <div class="left">
        <div class="image-wrapper">
          <h1>Bienvenue sur RentaKar</h1>
          <img class="logo" alt="Rentakar logo" src="@/assets/imghome.png" />
        </div>
      </div>
      <div class="right">
        <HelloWorld />
      </div>
    </div>
    <SearchPod />
  </main>
</template>

<style scoped>
.main-content {
  padding: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.left {
  flex: 1;
  position: relative;
}

.image-wrapper {
  position: relative;
}

.image-wrapper h1 {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
}

.logo {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>