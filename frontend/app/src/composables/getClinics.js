import { ref } from 'vue'


const getAllClinics = () => {
    const error = ref(null)
    const clinic_data = ref(null)
    error.value = null
    try {
        fetch('http://localhost:3000/api/clinics')
        .then( res => res.json())
        .then((data) => { 
            // console.log('working', data) 
            error.value = null
            clinic_data.value = data.clinics.reduce((clinics, currentClinic) => {
                const foundClinic = clinics.find(clinic => clinic.clinicName === currentClinic.clinic_name)

                if (foundClinic?.clinicName === currentClinic.clinic_name) {
                    foundClinic.medications.push({
                        name: currentClinic.medication_name,
                        amount: currentClinic.amount
                    })
                } else {
                    clinics.push({
                        id: currentClinic.id,
                        clinicName: currentClinic.clinic_name,
                        medications: [{
                            name: currentClinic.medication_name,
                            amount: currentClinic.amount
                        }]
                    })
                }

                return clinics
            }, [])
        })
    } catch (err) {
        // console.log(data);
        console.log({ msg: err.message });
        error.value = err.message;
        clinic_data.value = null
    }

    return { error, clinic_data }
};

export default getAllClinics;