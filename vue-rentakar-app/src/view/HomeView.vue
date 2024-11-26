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
          <h1 class="title">Bienvenue sur RentaKar</h1>
          <img class="logo" alt="Rentakar logo" src="@/assets/imghome.png" />
          <div class="search-overlay">
            <SearchPod />
          </div>
        </div>
      </div>
      <div class="right">
        <HelloWorld />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  position: relative;
}

.left {
  width: 100%;
  animation: slideUp 1s ease-out;
}
.left .image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-wrapper {
  position: relative;
}
.search-overlay {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  z-index: 3;
  animation: centerEntry 1s ease-out 0.7s backwards;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  animation: fadeIn 1.5s ease-out;
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
  width: 100%;
  animation: slideUp 1s ease-out 0.5s backwards;
}

.logo {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .content-container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>