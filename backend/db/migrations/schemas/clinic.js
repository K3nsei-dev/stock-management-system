const clinicSchema = (table) => {
    table.uuid('id').primary().unique()
    table.string('clinic_name').notNullable()
    table.specificType('medication', 'text ARRAY')
}

module.exports = clinicSchema;