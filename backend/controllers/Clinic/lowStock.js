const knex = require('../../db/knex.js');

async function stockLevels (req, res) {
    try {
        let filteredClinic = await knex.select(
            "cl.clinic_name",
            "md.medication_name",
            "amount"
        )
            .from("clinic_meds")
            .join("clinics AS cl", "cl.id", "clinic_meds.clinic_id")
            .join("medications AS md", "md.id", "clinic_meds.medication_id")
            .where("amount", "<", 5)

        let clinicWarning = filteredClinic.map((item) => `${ item.clinic_name } is short on ${ item.medication_name }; Amount: ${ item.amount }`)

        res.json(clinicWarning)
        
    } catch (err) {
        res.json({ msg: err.message})
    }
}

module.exports = { stockLevels }