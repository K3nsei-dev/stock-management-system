/** @arg {import('knex').Knex.CreateTableBuilder} table */
const medication = (table) => {
    table.integer('id').unique().primary()
    table.string('medication_name').notNullable()
}

module.exports = medication