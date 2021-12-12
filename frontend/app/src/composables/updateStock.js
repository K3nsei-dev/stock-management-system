import { ref } from 'vue'
const error = ref(null)

const updateStock = (id, amount) => {
    const updateStock = ref(null)
    error.value = null
    try {
        fetch('http://localhost:3000/api/update', {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                amount: amount
            })
        }).then(res => res.json())
        .then(data => {
            console.log('working', data)
            updateStock.value = data
            error.value = null
        })
    } catch (err) {
        console.log({ msg: err.message });
        error.value = err.message
        updateStock.value = null
    }
};

const useUpdateStock = () => {
    return { error, updateStock }
}

export default useUpdateStock;