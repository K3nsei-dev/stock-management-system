const knex = require('../../db/knex.js');

async function updateStock (req, res) {
    let { id, amount } = req.body

    let clinic = await knex.select()
                           .from('clinic_meds')
                           .where('id', id)
                           .update({
                               amount: amount
                           })
                           .then((data) => res.json(data))

    return clinic
}

module.exports = { updateStock } 