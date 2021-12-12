import { ref } from 'vue'

const error = ref(null)

const signIn = async (email, password) => {
    error.value = null
    try {
        const headersList = {
            'Accept': '*/*',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: headersList
        }).then(res => console.log(res))
        .then(data => console.log(data, { msg: 'user logged in' }))
    } catch (err) {
        console.log({ msg: err.message});
        err.value = err.message
    }
}

const useSignIn = () => {
    return { error, signIn }
}

export default useSignIn