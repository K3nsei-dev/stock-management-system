const { v4 } = require('uuid');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clinics').del()
    .then(function () {
      // Inserts seed entries
      return knex('clinics').insert([
        {
          id: v4(),
          clinic_name: 'Clinic A',
          medication: [
            {
            name: 'Nevirapine',
            amount: 25
          },
          {
            name: 'Stavudine',
            amount: 8
          },
          {
            name: 'Zidotabine',
            amount: 11
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic B',
          medication: [
            {
            name: 'Nevirapine',
            amount: 17
          },
          {
            name: 'Stavudine',
            amount: 50
          },
          {
            name: 'Zidotabine',
            amount: 20
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic C',
          medication: [
            {
            name: 'Nevirapine',
            amount: 1
          },
          {
            name: 'Stavudine',
            amount: 5
          },
          {
            name: 'Zidotabine',
            amount: 18
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic D',
          medication: [
            {
            name: 'Nevirapine',
            amount: 11
          },
          {
            name: 'Stavudine',
            amount: 4
          },
          {
            name: 'Zidotabine',
            amount: 16
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic E',
          medication: [
          {
            name: 'Nevirapine',
            amount: 30
          },
          {
            name: 'Stavudine',
            amount: 22
          },
          {
            name: 'Zidotabine',
            amount: 3
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic F',
          medication: [
            {
            name: 'Nevirapine',
            amount: 7
          },
          {
            name: 'Stavudine',
            amount: 9
          },
          {
            name: 'Zidotabine',
            amount: 12
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic G',
          medication: [
            {
            name: 'Nevirapine',
            amount: 10
          },
          {
            name: 'Stavudine',
            amount: 31
          },
          {
            name: 'Zidotabine',
            amount: 29
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic H',
          medication: [
            {
            name: 'Nevirapine',
            amount: 27
          },
          {
            name: 'Stavudine',
            amount: 44
          },
          {
            name: 'Zidotabine',
            amount: 13
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic I',
          medication: [
            {
            name: 'Nevirapine',
            amount: 66
          },
          {
            name: 'Stavudine',
            amount: 15
          },
          {
            name: 'Zidotabine',
            amount: 20
          }
        ]
        },
        {
          id: v4(),
          clinic_name: 'Clinic J',
          medication: [
            {
            name: 'Nevirapine',
            amount: 97
          },
          {
            name: 'Stavudine',
            amount: 54
          },
          {
            name: 'Zidotabine',
            amount: 2
          }
        ]
        },
      ]);
    });
};
