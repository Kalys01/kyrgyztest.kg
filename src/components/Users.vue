<template>
  <div>
    <h3>Customers</h3>
    <table id="customers" class="mt-20">
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>USERNAME</th>
        <th>EMAIL</th>
        <th>ADDRESS</th>
        <th>PHONE</th>
        <th>WEBSITE</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.address.street}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.website}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import useUsers from "@/hooks/users"

export default defineComponent({
  name: "Users",
  async setup() {
    const { users } = await useUsers();
    return { users };
  },
});
</script>

<style scoped>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
#customers tr:nth-child(even){background-color: #f2f2f2;}
#customers tr:hover {background-color: #ddd;}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
