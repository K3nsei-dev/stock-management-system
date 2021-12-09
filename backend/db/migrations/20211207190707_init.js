
exports.up = function(knex) {
    return knex.schema
    .createTable('users', require('./schemas/user'))
    .createTable('clinics', require('./schemas/clinic'))
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('clinics')
};
