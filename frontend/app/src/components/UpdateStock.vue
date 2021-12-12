<template>
  <div class="container">
      <div>
        <input type="number" v-model="amount" class="input">
      </div>
      <div>
        <button class="button" @click="handleSubmit(id)">Update {{ medicationName }}</button>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useUpdateStock from '../composables/updateStock'

export default {
    props: ['id', 'medicationName'],
    setup () {
        const { updateStock } = useUpdateStock()

        const amount = ref()

        const handleSubmit = async (id) => {
            await updateStock(id, parseInt(amount.value));
            window.location.reload()
        }

        return { amount, handleSubmit }
    }
}
</script>

<style>

</style>