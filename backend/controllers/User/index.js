const bcrypt = require('bcryptjs');

const knex = require('../../db/knex.js');

async function Login (req, res) {
    try {
        const { email, password } = req.body

        let user = await knex.select()
                   .from('users')
                   .where('email', email)
                //    .andWhere('password', password)
                   .then((user) => { return user[0] });

        if (!user) {
            return res.status(401).json({ msg: 'Invalid Email' })
        }

        const userPass = await bcrypt.compare(password, user.password);
        
        if (!userPass) {
            res.status(401).json({ msg: 'Invalid Password' })
        } else {
            res.json({ msg: 'You logged in' })
        }

    } catch (err) {
        res.json({ msg: err.message })
    }
}

module.exports = { Login }