<template>
  <div class="admin-vehicule">
    <h2>Ajouter un véhicule</h2>
    <form @submit.prevent="createVehicule">
      <label for="type">Type</label>
      <input v-model="vehicule.type" id="type" required />

      <label for="model">Modèle</label>
      <input v-model="vehicule.model" id="model" required />

      <label for="brand">Marque</label>
      <input v-model="vehicule.brand" id="brand" required />

      <label for="color">Couleur</label>
      <input v-model="vehicule.color" id="color" required />

      <label for="kilometer">Kilométrage</label>
      <input type="number" v-model.number="vehicule.kilometer" id="kilometer" required />

      <label for="horsePower">Puissance</label>
      <input type="number" v-model.number="vehicule.horsePower" id="horsePower" required />

      <label for="cargo">Capacité de chargement</label>
      <input type="number" v-model.number="vehicule.cargo" id="cargo" required />

      <label for="capacity">Capacité des passagers</label>
      <input type="number" v-model.number="vehicule.capacity" id="capacity" required />

      <label for="displacement">Cylindrée</label>
      <input type="number" v-model.number="vehicule.displacement" id="displacement" required />

      <label for="registration">Immatriculation</label>
      <input v-model="vehicule.registration" id="registration" required />

      <label for="available">Disponibilité</label>
      <select v-model="vehicule.available" id="available" required>
        <option :value="true">Oui</option>
        <option :value="false">Non</option>
      </select>

      <button type="submit">Ajouter le véhicule</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { VehiculeService } from '@/services/VehiculeService';


const vehicule = ref({
  type: '',
  model: '',
  brand: '',
  color: '',
  kilometer: 0,
  horsePower: 0,
  cargo: 0,
  capacity: 0,
  displacement: 0,
  registration: '',
  available: true,
});

const createVehicule = async () => {
  try {
    const response = await VehiculeService.addVehicule(vehicule.value);
    alert('Véhicule ajouté avec succès');
    console.log(response);
    Object.keys(vehicule.value).forEach(key => vehicule.value[key] = typeof vehicule.value[key] === 'boolean' ? true : (typeof vehicule.value[key] === 'number' ? 0 : ''));
  } catch (error) {
    alert('Erreur lors de l\'ajout du véhicule');
    console.error(error);
  }
};
</script>

<style scoped>
.admin-vehicule {
  max-width: 500px;
  margin: auto;
}

label {
  display: block;
  margin-top: 1rem;
}

input, select, button {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>