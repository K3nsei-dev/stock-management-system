<template>
  <div>
      <router-link :to="{ name: 'signIn' }">
          <button>LOG OUT</button>
      </router-link>
      <h1>Clinics in the Mezzanine District</h1>
    <router-link :to="{ name: 'lowStock'}">
        <button>View Clinics that are Low on Stock</button>
    </router-link>
    <div v-if="error"> {{ error }} </div>
    <div v-for="clinic in clinics" :key="clinic.id">
        <div>
            <h1> {{ clinic.clinicName }} </h1>
            <div>
                <h2>Clinic Medication</h2>
                <div v-for="medication in clinic.medications" :key="medication.name"> 
                    <h3>{{ medication.name }}: {{ medication.amount }}</h3>
                    <update :id="clinic.id" :medicationName="medication.name" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import getAllClinics from '../composables/getClinics'
import update from '../components/UpdateStock.vue'
export default {
setup () {
    const { error, clinic_data } = getAllClinics()

    let clinics = clinic_data

    console.log('working', clinics);

    return { error, clinics }
},
components: { update }
}
</script>

<style>

</style>