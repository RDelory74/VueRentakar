<script setup>
import { ref, onMounted } from 'vue';


const title = ref('Bienvenue sur Rentakar');
const isLoading = ref(true);
const stats = ref({
  totalOrders: 0,
  totalUsers: 0,
  totalVehicules: 0
});


const fetchDashboardStats = async () => {
  try {

    await new Promise(resolve => setTimeout(resolve, 1000));

    stats.value = {
      totalOrders: 150,
      totalUsers: 45,
      totalVehicules: 30
    };
  } catch (error) {
    console.error('Erreur lors du chargement des statistiques:', error);
  } finally {
    isLoading.value = false;
  }
};


onMounted(() => {
  fetchDashboardStats();
});
</script>

<template>
  <div class="home">
    <header class="header">
      <h1>{{ title }}</h1>
      <p class="subtitle">Tableau de bord</p>
    </header>

    <main class="main-content">
      <!-- Affichage conditionnel pendant le chargement -->
      <div v-if="isLoading" class="loading">
        Chargement...
      </div>

      <div v-else class="dashboard-grid">
        <!-- Carte des commandes -->
        <div class="stat-card">
          <h3>Commandes</h3>
          <p class="stat-number">{{ stats.totalOrders }}</p>
          <router-link to="/orders" class="card-link">
            Voir les commandes
          </router-link>
        </div>

        <!-- Carte des utilisateurs -->
        <div class="stat-card">
          <h3>Utilisateurs</h3>
          <p class="stat-number">{{ stats.totalUsers }}</p>
          <router-link to="/users" class="card-link">
            Voir les utilisateurs
          </router-link>
        </div>

        <!-- Carte des véhicules -->
        <div class="stat-card" >
          <h3>Véhicules</h3>
          <p class="stat-number">{{ stats.totalVehicules }}</p>
          <router-link to="/admin-vehicule" class="card-link">
            Voir les véhicules
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.stat-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #42b983;
  margin-bottom: 1rem;
}

.card-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.card-link:hover {
  background-color: #3aa876;
}

/* Responsive design */
@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .header h1 {
    font-size: 2rem;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>