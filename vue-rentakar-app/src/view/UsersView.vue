<script >
import {UserService} from '../services/UserService';
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    UserService.getAllUsers()
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error("Error fetching users:", error);
        });
  }
};

</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        {{ user.id }} - {{ user.firstname }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>