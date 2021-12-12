<template>
  <div>
    <div class="headerContainer">
        <div>
            <h3>Mezzanine Stock Management System</h3>
        </div>
        <div>
        <router-link :to="{ name: 'signIn' }">
            <button class="button">LOG OUT</button>
        </router-link>
        </div>
    </div>
    <h1>Low Stock List</h1>
    <router-link :to="{ name: 'Clinics'}">
        <button class="button">View Clinics</button>
    </router-link>
      <h2 class="text">Warning: Low Medication Stock</h2>
    <div v-for="stock in Stocks" :key="stock">
        <h3>{{ stock }}</h3>
    </div>
  </div>
</template>

<script>
import getLowStock from '../composables/getLowStock'
export default {
   setup () {
       const { error, lowStock } = getLowStock()

       const Stocks = lowStock

       console.log(Stocks);

       return { error, lowStock, Stocks }
   }
}
</script>

<style>

</style>