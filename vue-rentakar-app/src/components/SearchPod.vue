<script >
import { VehiculeService } from '@/services/VehiculeService';
export default {
  name: 'SearchPod',
  props: {
    msg: String
  },
  data() {
    return {
      startDate: '',
      endDate: '',
      availableVehicles: [],
      today: new Date().toISOString().split('T')[0],
      maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString().split('T')[0]
    };
  },
  methods: {
    async fetchAvailableVehicles() {
      if(this.startDate && this.endDate){
        try{
          const response = await VehiculeService.getVehiculeByDate(this.startDate, this.endDate);
          console.log('Available vehicules responses',response.data);
          this.availableVehicles = response.data || [];
        } catch(error){
          console.error("Error in fetchAvailableVehicles", error);
        }
      }
    }
  }
};
</script>

<template>
  <div class="searchPod">
  <h3>Je choisi mes dates </h3>
    <div class="searchPodButton">
  <div class="date-inputs">
    <input
        type="date"
        v-model="startDate"
        :min="today"
        :max="maxDate"
        class="date-input"
    >
    <div class="bouton">
      <button @click="fetchAvailableVehicles" class="fetch-button">Rechercher des véhicules</button>
    </div>
    <input
        type="date"
        v-model="endDate"
        :min="startDate || today"
        :max="maxDate"
        class="date-input"
    >
  </div>

    </div>
  <div class="vehicules-container">
    <div v-if="availableVehicles.length > 0" class="cards-container">
      <div class="vehicule-card" v-for="vehicle in availableVehicles" :key="vehicle.id">
        <h2>{{ vehicle.model }}</h2>
        <div class="image-container">
          <img
              :src="vehicle.type === 'moto' ? require('@/assets/moto.png') : require('@/assets/porsche.png')"
              :alt="vehicle.type === 'moto' ? 'moto' : 'voiture'"
              class="vehicule-image"
          />
        </div>
        <p><strong>Type:</strong> {{ vehicle.type }}</p>
        <p><strong>Brand:</strong> {{ vehicle.brand }}</p>
        <p><strong>Color:</strong> {{ vehicle.color }}</p>
        <p><strong>Capacity:</strong> {{ vehicle.capacity }} seats</p>
      </div>
    </div>
    <p v-else-if="error">{{ error }}</p>
  </div>
  </div>
</template>

<style>
.searchPod {
  font-family: Geneva, Arial, sans-serif;
  background: rgba(34, 34, 34, 0.13);
}
h3 {
  margin: 10px 0 0;
  padding: 2%;
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.date-inputs {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin: 20px 10px;
}

.date-input {
  font-family: Geneva, Arial, sans-serif;
  font-size: 1rem;
  padding: 10px 15px;
  border: 2px solid #ccc;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.date-input:hover {
  border-color: transparent;
  box-shadow: 0 0 8px rgb(16, 8, 8);

}
button.fetch-button {
  font-family: monospace;
}
button{
  font-size: 1rem;
  padding: 10px;
  border: 2px solid #ccc;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
button:hover {
  border-color: transparent;
  box-shadow: 0 0 20px rgb(137, 173, 184);

}
.vehicules-container {
  width: 100%;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 4px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
}

.vehicule-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
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
  max-height: 150px;
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