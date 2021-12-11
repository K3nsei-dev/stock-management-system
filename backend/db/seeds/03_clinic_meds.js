exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("clinic_meds")
    .del()
    .then(async function () {
      // Inserts seed entries
      return await knex("clinic_meds").insert([
        {
          id: 0,
          clinic_id: 0,
          medication_id: 0,
          amount: 20
        },
        {
          id: 1,
          clinic_id: 0,
          medication_id: 1,
          amount: 12
        },
        {
          id: 2,
          clinic_id: 0,
          medication_id: 2,
          amount: 8
        },
        {
          id: 3,
          clinic_id: 1,
          medication_id: 0,
          amount: 5
        },
        {
          id: 4,
          clinic_id: 1,
          medication_id: 1,
          amount: 9
        },
        {
          id: 5,
          clinic_id: 1,
          medication_id: 2,
          amount: 11
        },
        {
          id: 6,
          clinic_id: 2,
          medication_id: 0,
          amount: 2
        },
        {
          id: 7,
          clinic_id: 2,
          medication_id: 1,
          amount: 6
        },
        {
          id: 8,
          clinic_id: 2,
          medication_id: 2,
          amount: 17
        },
        {
          id: 9,
          clinic_id: 3,
          medication_id: 0,
          amount: 4
        },
        {
          id: 10,
          clinic_id: 3,
          medication_id: 1,
          amount: 22
        },
        {
          id: 11,
          clinic_id: 3,
          medication_id: 2,
          amount: 30
        },
        {
          id: 12,
          clinic_id: 4,
          medication_id: 0,
          amount: 12
        },
        {
          id: 13,
          clinic_id: 4,
          medication_id: 1,
          amount: 66
        },
        {
          id: 14,
          clinic_id: 4,
          medication_id: 2,
          amount: 6
        },
        {
          id: 15,
          clinic_id: 5,
          medication_id: 0,
          amount: 2
        },
        {
          id: 16,
          clinic_id: 5,
          medication_id: 1,
          amount: 6
        },
        {
          id: 17,
          clinic_id: 5,
          medication_id: 2,
          amount: 17
        },
        {
          id: 18,
          clinic_id: 6,
          medication_id: 0,
          amount: 22
        },
        {
          id: 19,
          clinic_id: 6,
          medication_id: 1,
          amount: 65
        },
        {
          id: 20,
          clinic_id: 6,
          medication_id: 2,
          amount: 1
        },
        {
          id: 21,
          clinic_id: 7,
          medication_id: 0,
          amount: 15
        },
        {
          id: 22,
          clinic_id: 7,
          medication_id: 1,
          amount: 50
        },
        {
          id: 23,
          clinic_id: 7,
          medication_id: 2,
          amount: 176
        },{
          id: 24,
          clinic_id: 8,
          medication_id: 0,
          amount: 19
        },
        {
          id: 25,
          clinic_id: 8,
          medication_id: 1,
          amount: 36
        },
        {
          id: 26,
          clinic_id: 8,
          medication_id: 2,
          amount: 30
        },{
          id: 27,
          clinic_id: 9,
          medication_id: 0,
          amount: 12
        },
        {
          id: 28,
          clinic_id: 9,
          medication_id: 1,
          amount: 55
        },
        {
          id: 29,
          clinic_id: 9,
          medication_id: 2,
          amount: 170
        }
      ]);
    });
};
