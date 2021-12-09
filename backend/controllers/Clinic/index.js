const knex = require('../../db/knex.js');

async function getStock (req, res) {
    try {
        let clinics = await knex.select()
                      .from('clinics')
                      .then( (clinic) => { return clinic });

        
        res.json({ data: clinics})

    } catch (err) {
        res.json({ msg: err.message });
    }

}

module.exports = { getStock }