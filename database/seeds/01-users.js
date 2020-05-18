
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'mark123',
          email: 'mark@gmail.com',
          password: 'mark123',
          name: 'Mark',
        },
        {
          username: 'pat123',
          email: 'pat@gmail.com',
          password:'pat123',
          name: 'pat',
        }
      ]);
    });
};
