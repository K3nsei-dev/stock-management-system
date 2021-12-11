
exports.up = function(knex) {
    return knex.schema
    .createTable('users', require('./schemas/user'))
    .createTable('clinics', require('./schemas/clinic'))
    .createTable('medications', require('./schemas/medications'))
    .createTable('clinic_meds', require('./schemas/clinic_meds'))
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('clinic_meds')
  .dropTableIfExists('medications')
  .dropTableIfExists('clinics')
};
