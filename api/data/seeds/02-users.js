
exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {username: 'John', password: '1234'},
          {username: 'Winston', password: '12345'},
          {username: 'Stanley', password: '12345'}
        ]);
      });
  };