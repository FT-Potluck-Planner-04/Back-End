
exports.seed = function(knex) {
    return knex('items').del()
      .then(function () {
        return knex('items').insert([
          {item_name: 'soup'},
          {item_name: 'ribs'},
          {item_name: 'chowder'},
          {item_name: 'nachos'}
        ]);
      });
  };