<template>
  <div>
    <div v-for="stock in lowStock" :key="stock">
        <div> {{ stock }}</div>
    </div>
  </div>
</template>

<script>
import useGetLowStock from '../composables/getLowStock'
export default {
   setup () {
       const { error, getLowStock } = useGetLowStock()

       const lowStock = getLowStock()

       console.log(lowStock);

       return { error, getLowStock, lowStock }
   }
}
</script>

<style>

</style>