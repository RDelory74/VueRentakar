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
        {{ order.id }} - {{ order.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>