<template>
  <div>
    <div v-for="clinic in clincs" :key="clinic.id"></div>
    <div v-if="error"> {{ error }} </div>
  </div>
</template>

<script>
import getClinics from '../composables/getClinics'
export default {
setup () {
    const { error, clinics } = getClinics()

    return { error, clinics }
}
}
</script>

<style>

</style>