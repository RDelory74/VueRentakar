<script >
import { OrderService } from '../services/OrderService';
export default {
  data() {
    return {
      orders: []
    };
  },
  created() {
    OrderService.getAllOrders()
        .then(response => {
          this.orders = response.data;
        })
        .catch(error => {
          console.error("Error fetching orders:", error);
        });
  }
};

</script>

<template>
  <div>
    <h1>Orders</h1>
    <ul>
      <li v-for="order in orders" v-bind:key="order.id">
       Reservation N° {{ order.id }} - Date de début {{ order.startDate }} - Date de fin {{ order.endDate }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>