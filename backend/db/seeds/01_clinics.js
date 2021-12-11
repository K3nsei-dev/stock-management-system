exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clinics').del()
    .then(async function () {
      // Inserts seed entries
      return await knex('clinics').insert([
        {
          id: 0,
          clinic_name: 'Clinic A'
        },
        {
          id: 1,
          clinic_name: 'Clinic B'
        },
        {
          id: 2,
          clinic_name: 'Clinic C'
        },
        {
          id: 3,
          clinic_name: 'Clinic D'
        },
        {
          id: 4,
          clinic_name: 'Clinic E'
        },
        {
          id: 5,
          clinic_name: 'Clinic F'
        },
        {
          id: 6,
          clinic_name: 'Clinic G'
        },
        {
          id: 7,
          clinic_name: 'Clinic H'
        },
        {
          id: 8,
          clinic_name: 'Clinic I'
        },
        {
          id: 9,
          clinic_name: 'Clinic J'
        },
      ]);
    });
};
