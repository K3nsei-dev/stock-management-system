import { ref } from 'vue'

const error = ref(null)

const getLowStock = () => {
    error.value = null
    try {
        fetch('localhost:3000/api/low-stock', {
            method: 'GET',
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => console.log(data))
    } catch (err) {
        console.log({ msg: err.message});
        error.value = err.message
    }
};


const useGetLowStock = () => {
    return { error, getLowStock }
}

export default useGetLowStock;