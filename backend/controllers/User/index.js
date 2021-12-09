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

        

        const userPass = await bcrypt.compare(password, user.password);
        
        if (!user && !userPass) {
            res.json({ msg: 'Invalid Login Details' });
        } else if (!user && userPass) {
            res.json({ msg: 'Invalid Email' })
        } else if (user && !userPass) {
            res.json({ msg: 'Invalid Password' })
        } else {
            res.json({ msg: 'You logged in' })
        }

    } catch (err) {
        res.json({ msg: err.message })
    }
}

module.exports = { Login }