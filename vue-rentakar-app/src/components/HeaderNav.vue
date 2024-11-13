<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo-container">
        <img class="logo" alt="Rentakar logo" src="@/assets/RTKlogo.png">
        <router-link to="/" class="logo-link">RentAKar</router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/orders" :class="{ active: $route.path === '/orders' }">
            Commandes
          </router-link>
        </li>
        <li>
          <router-link to="/users" :class="{ active: $route.path === '/users' }">
            Utilisateurs
          </router-link>
        </li>
        <li>
          <router-link to="/vehicules" :class="{ active: $route.path === '/vehicules' }">
            Véhicules
          </router-link>
        </li>
        <li>
        <router-link to="/home" :class="{ active: $route.path === '/home' }">
          Home
        </router-link>
      </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  height: 100px;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 0;
}

.nav-container {

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  width: auto;
  height: 40px; /* Ajuster la taille du logo */
}

.logo-link {
  font-size: 1.2rem; /* Ajuster la taille du texte du logo */
  color: #42b983;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo-link:hover {
  color: #3aa876;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-size: 1rem; /* Ajuster la taille des liens */
}

.nav-links a:hover {
  background-color: rgba(66, 185, 131, 0.1);
}

.nav-links a.active {
  background-color: #42b983;
  color: white;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }
}
</style>