const knex = require('../../db/knex.js');

async function filterClinics (req, res) {
    try {
        const { clinic_name } = req.body

        let filteredClinic = await knex.select()
                             .from('clinics')
                             .where('clinic_name', clinic_name)
                             .then((clinic => { return clinic }))

        res.json({ data: filteredClinic})
        
    } catch (err) {
        res.json({ msg: err.message})
    }
}

module.exports = { filterClinics }