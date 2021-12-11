/** @arg {import('knex').Knex.CreateTableBuilder} table */
const clinic_medications = (table) => {
    table.integer('id').primary().unique().notNullable()
    table.integer('clinic_id').references('id').inTable('clinics').notNullable()
    table.integer('medication_id').references('id').inTable('medications').notNullable()
    table.integer('amount').notNullable()
}

module.exports = clinic_medications