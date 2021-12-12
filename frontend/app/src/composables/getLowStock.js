import { ref } from 'vue'

const getLowStock = () => {
    const error = ref(null)
    const lowStock = ref(null)
    error.value = null
    try {
        fetch('http://localhost:3000/api/low-stock'
        ).then(res => res.json())
        .then(data => {
            // console.log(data)
            error.value = null
            lowStock.value = data
        })
    } catch (err) {
        console.log({ msg: err.message});
        error.value = err.message
    }

    return { error, lowStock}
};


export default getLowStock;