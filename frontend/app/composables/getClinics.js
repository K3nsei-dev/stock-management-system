import { ref } from 'vue'

const error = ref(null)

const getAllClinics = () => {
    error.value = null
    try {
        fetch('localhost:3000/api/clinics', {
            method: 'GET',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => console.log(data))
    } catch (err) {
        console.log({ msg: err.message });
        error.value = err.message;
    }
};

const useGetAllClinics = () => {
    return { error, getAllClinics }
}

export default useGetAllClinics;