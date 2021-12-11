exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('medications').del()
    .then(async function () {
      // Inserts seed entries
      return await knex('medications').insert([
            {
            id: 0,
            medication_name: 'Nevirapine',
          },
          {
            id: 1,
            medication_name: 'Stavudine',
          },
          {
            id: 2,
            medication_name: 'Zidotabine',
          }
      ]);
    });
};