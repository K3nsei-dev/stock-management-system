/** @arg {import('knex').Knex.CreateTableBuilder} table */
const clinicSchema = (table) => {
    table.integer('id').primary().unique()
    table.string('clinic_name').notNullable()
}

module.exports = clinicSchema;