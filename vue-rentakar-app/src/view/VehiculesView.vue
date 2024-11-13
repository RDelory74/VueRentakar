<script >
import {VehiculeService} from '../services/VehiculeService';
export default {
  data() {
    return {
      vehicules: [],
    };
  },
  created() {
    VehiculeService.getAllVehicules()
        .then(response => {
          this.vehicules = response.data;
        })
        .catch(error => {
          console.error("Error fetching orders:", error);
        });
  }
};

</script>

<template>
  <div>
    <h1>Vehicules</h1>
    <ul>
      <li v-for="vehicules in vehicules" v-bind:key="vehicules.id">
        {{ vehicules.id }} - {{ vehicules.model }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>