import { ref } from 'vue'

const error = ref(null)

const signIn = async (email, password) => {
    const user_login = ref(null)
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
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            user_login.value = data
            error.value = null
        })
    } catch (err) {
        console.log({ msg: err.message});
        error.value = err.message
        user_login = null
    }
}

const useSignIn = () => {
    return { error, signIn }
}

export default useSignIn