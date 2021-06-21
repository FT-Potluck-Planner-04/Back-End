
exports.seed = function(knex) {
    return knex('potlucks').del()
      .then(function () {
        return knex('potlucks').insert([
          {potluck_name: 'party potluck', potluck_description: 'woohoo', date: '01/01/2021', time: '2:00pm', location: 'Johns house'},
          {potluck_name: 'big potluck', potluck_description: 'woohoo', date: '01/02/2021', time: '3:00pm', location: 'Winstons house'}
        ]);
      });
  };