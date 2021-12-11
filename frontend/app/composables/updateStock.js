import { ref } from 'vue'

const error = ref(null)

const updateStock = () => {
    error.value = null
    try {
        fetch('localhost:3000/api/update', {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "clinic_id": req.body.clinic_id,
                "medication_id": req.body.medication_id,
                "amount": req.body.amount
            })
        }).then(res => res.json())
        .then(data => console.log(data))
    } catch (err) {
        console.log({ msg: err.message });
        err.value = err.message
    }
};

const useUpdateStock = () => {
    return { error, updateStock }
}

export default useUpdateStock;