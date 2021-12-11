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
import useSignIn from '../../composables/login'
export default {
    setup () {
      const email = ref('')
      const password = ref('')
      const { error, signIn } = useSignIn()
      const handleSubmit = async () => {
        await signIn(email.value, password.value)
        console.log('user logged in');
      }
      return { handleSubmit, email, password, error }
}
}
</script>

<style>

</style>