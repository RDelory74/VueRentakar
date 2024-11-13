<script >
import {VehiculeService} from '@/services/VehiculeService';

export default {
  data() {
    return {
      vehicules: [],
      error: null
    };
  },
  async created() {
    try {
      const response = await VehiculeService.getAllVehicules();
      this.vehicules = response.data;
    } catch (error) {
      this.error = VehiculeService.handleError(error);
    }
  }
};
</script>

<template>
  <div class="vehicules-container">
    <h1>Véhicules</h1>
    <div v-if="vehicules.length" class="cards-container">
      <div class="vehicule-card" v-for="vehicule in vehicules" :key="vehicule.id">
        <h2>{{ vehicule.model }}</h2>
        <div class="image-container">
          <img
              :src="vehicule.type === 'moto' ? require('@/assets/moto.png') : require('@/assets/porsche.png')"
              :alt="vehicule.type === 'moto' ? 'moto' : 'voiture'"
              class="vehicule-image"
          />
        </div>
        <p><strong>Type:</strong> {{ vehicule.type }}</p>
        <p><strong>Brand:</strong> {{ vehicule.brand }}</p>
        <p><strong>Color:</strong> {{ vehicule.color }}</p>
        <p><strong>Capacity:</strong> {{ vehicule.capacity }} seats</p>
      </div>
    </div>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>Chargement...</p>
  </div>
</template>

<style scoped>
.vehicules-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.vehicule-card {
  width: 250px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 4px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
}

.vehicule-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.vehicule-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #333;
}

.vehicule-card p {
  margin: 0.3rem 0;
  color: #555;
}

.image-container {
  width: 100%;
  max-height: 150px; /* Limite la hauteur de l'image tout en gardant la proportion */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vehicule-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 15px;
}
</style>