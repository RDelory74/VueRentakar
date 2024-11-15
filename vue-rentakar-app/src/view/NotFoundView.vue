<template>
  <div class="not-found">
    <h1>404 - Page non trouvée</h1>
    <p>La page que vous recherchez n'existe pas.</p>
    <router-link to="/" class="home-link">Retourner à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}

.home-link {
  color: #42b983;
  text-decoration: none;
}

.home-link:hover {
  text-decoration: underline;
}
</style>