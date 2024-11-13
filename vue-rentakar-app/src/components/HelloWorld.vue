<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Enter your Dates </h3>
    <div class="date-inputs">
      <input
          type="date"
          v-model="startDate"
          @change="fetchAvailableVehicles"
          min="2024-01-01"
          max="2025-12-31"
          class="date-input"
      >
      <input
          type="date"
          v-model="endDate"
          @change="fetchAvailableVehicles"
          min="2024-01-01"
          max="2025-12-31"
          class="date-input"
      >
    </div>
    <h3>Best customer's choice</h3>
    <img class="picto" alt="moto" src="@/assets/moto.png">
    <img class="picto"  alt="camionette" src="@/assets/C15.png">
    <img class="picto" alt="voiture" src="@/assets/porsche.png">

    <div v-if="availableVehicles.length">
      <h3>Available Vehicles</h3>
      <ul>
        <li v-for="vehicle in availableVehicles" :key="vehicle.id">
          {{ vehicle.type }} - {{ vehicle.model }} - {{ vehicle.brand }} - {{ vehicle.color }}
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
import { VehiculeService } from '@/services/VehiculeService';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      startDate: '',
      endDate: '',
      availableVehicles: []
    };
  },
  methods: {
    async fetchAvailableVehicles() {
      if(this.startDate && this.endDate){
        try{
          const response = await VehiculeService.getVehiculeByDate(this.startDate, this.endDate);
          console.log('Avaialable vehicules responses',response.data);
          this.availableVehicles = response.data || [];
        } catch(error){
          console.error("Error in fetchAvailableVehicles", error);
        }
      }
    }
  }
};

</script>


<style scoped>
h3 {
  margin: 40px 0 0;
  padding: 2%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.date-input {
  margin: 5px;
}
.picto{
  border-radius:25px;
  width: 200px;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 5%;
}
</style>
