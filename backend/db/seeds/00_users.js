const { v4 } = require('uuid');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('Password', salt)

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: v4(), 
          email: 'superuser@gmail.io',
          password: hash,
          role: 'super-user'
        },
        {
          id: v4(), 
          email: 'admin@gmail.io',
          password: hash,
          role: 'admin'
        },
        {
          id: v4(), 
          email: 'worker@gmail.io',
          password: hash,
          role: 'worker'
        }
      ]);
    });
};
