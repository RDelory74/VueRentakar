<template>
  <div class="hello">
    <div class="picto-container">
      <div class="picto-wrapper">
        <img class="picto" alt="moto" src="@/assets/moto.png">
        <div class="picto-caption">Moto</div>
      </div>
      <div class="picto-wrapper">
        <img class="picto" alt="camionette" src="@/assets/C15.png">
        <div class="picto-caption">Utilitaire</div>
      </div>
      <div class="picto-wrapper">
        <img class="picto" alt="voiture" src="@/assets/porsche.png">
        <div class="picto-caption">Voiture</div>
      </div>
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


<style scoped>
h3 {
  margin: 10px 0 0;
  padding: 2%;
  color: white;
  font-size: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
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
.picto-container {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
}

.picto-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.picto {

  max-width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: grayscale(100%);
}

.picto-container:hover .picto {
  filter: grayscale(100%);
}

.picto-container .picto:hover {
  transform: scale(1.1);
  filter: none;
}

.picto-caption {
  position: absolute;
  bottom: -20%;
  left: 0;
  width: 100%;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 5px 0;
  transition: bottom 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

.picto-wrapper:hover .picto-caption {
  bottom: 50%;
  opacity: 1;
  transform: translateY(50%);
}
button{
  font-size: 1rem;
  border-radius: 25px;
  padding: 10px;
  border: 2px solid #ccc;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
button:hover {
  border-color: transparent;
  box-shadow: 0 0 8px rgb(16, 8, 8);

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
.hello{
  margin-top: 6rem ;
}
</style>
