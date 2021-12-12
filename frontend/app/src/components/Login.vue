<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign In</h1>
      <input 
      type="text" 
      required 
      placeholder="email@example.com"
      v-model="email"
      >
      <input 
      type="password" 
      required 
      placeholder="**********"
      v-model="password"
      >
      <div v-if="error"> {{ error }} </div>
      <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSignIn from '../composables/login'
export default {
    setup () {
      const router = useRouter()
      const { error, signIn } = useSignIn()
      const email = ref('')
      const password = ref('')
      const handleSubmit = async () => {
        const Login = await signIn(email.value, password.value)

        if (Login) {
           router.push({ name: 'Clinics'})
        }
      }
      return { email, password, handleSubmit, error }
}
}
</script>

<style>

</style>