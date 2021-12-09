const userSchema = (table) => {
    table.uuid('id').primary().unique()
    table.string('email').unique().notNullable()
    table.string('role').notNullable()
    table.string('password').notNullable()
}

module.exports = userSchema;