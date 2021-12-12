<template>
<div class="container">
  <h1>Mezzanine Stock Management System</h1>
  <form @submit.prevent="handleSubmit" id="form">
    <h1>Sign In</h1>
      <input 
      type="text" 
      required 
      placeholder="email@example.com"
      v-model="email"
      class="input"
      >
      <input 
      type="password" 
      required 
      placeholder="**********"
      v-model="password"
      class="input"
      >
      <div v-if="error"> {{ error }} </div>
      <button class="button">Login</button>
  </form>
</div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useSignIn from '../composables/login'
export default {
    setup () {
      const router = useRouter()
      const { error, signIn, details } = useSignIn()
      const email = ref('')
      const password = ref('')
      const handleSubmit = async () => {
        const login = await signIn(email.value, password.value);

        console.log('login', login);
        console.log('details', details.value);
        console.log(error);

      }
      watch(details, (details) => {
        if (details === "You logged in") {
          router.push({ name: 'clinics'})
        }
      })
      return { email, password, handleSubmit, error }
}
}
</script>

<style>
</style>