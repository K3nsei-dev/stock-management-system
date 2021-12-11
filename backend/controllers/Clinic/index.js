const knex = require('../../db/knex.js');

async function getStock (req, res) {
    try {
        let clinics = await knex.select()
                      .from('clinic_meds')
                      .join("clinics AS cl", "cl.id", "clinic_meds.clinic_id")
                      .join("medications AS md", "md.id", "clinic_meds.medication_id")
                      .then( (clinic) => { return clinic });

        
        res.json({ clinics })

    } catch (err) {
        res.json({ msg: err.message });
    }

}

module.exports = { getStock }