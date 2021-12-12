<template>
  <div>
    <div v-if="error"> {{ error }} </div>
    <div v-for="clinic in clinics" :key="clinic.id">
        <div>
            <h1> {{ clinic.clinic_name }} </h1>
            <div>
                <h3>Clinic Medication</h3>
                <p> {{ clinic.medication_name }}: {{ clinic.amount }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import getAllClinics from '../composables/getClinics'
export default {
setup () {
    const { error, clinic_data } = getAllClinics()

    let clinics = clinic_data

    console.log('working', clinics);
    // console.log(error);

    return { error, clinics }
}
}
</script>

<style>

</style>