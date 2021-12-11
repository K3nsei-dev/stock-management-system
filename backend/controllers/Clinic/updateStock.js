const knex = require('../../db/knex.js');

async function updateStock (req, res) {
    let { clinic_id, amount, medication_id } = req.body

    let clinic = await knex.select()
                           .from('clinic_meds')
                           .where('clinic_id', clinic_id)
                           .andWhere('medication_id', medication_id)
                           .update({
                               amount: amount
                           })
                           .then((data) => res.json(data))

    return clinic
}

module.exports = { updateStock } 