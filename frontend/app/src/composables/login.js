import { ref } from 'vue'

const error = ref(null)
const details = ref(null)

const signIn = (email, password) => {
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
        }).then(async res => [!(res.status === 200), await res.json()])
        .then(([isError, data]) => {
            if (isError) {
                // console.log({ msg: data.msg});
                error.value = data.msg
                return
            }
            console.log('data', data)
            details.value = data.msg
            error.value = null
        })
    } catch (err) {
        console.log({ msg: err.message});
        error.value = err.message
        user_login = null
    }
}

const useSignIn = () => {
    return { error, signIn, details }
}

export default useSignIn