
exports.seed = function(knex) {
    return knex('potluck_items').del()
      .then(function () {
        return knex('potluck_items').insert([
          {potluck_id: 1, item_id: 1, user_id: 1},
          {potluck_id: 1, item_id: 2, user_id: 3},
          {potluck_id: 1, item_id: 3, user_id: 3},
          {potluck_id: 1, item_id: 4, user_id: 2},
          {potluck_id: 2, item_id: 1, user_id: 2},
          {potluck_id: 2, item_id: 4, user_id: 1},
          {potluck_id: 2, item_id: 3, user_id: 3}
        ]);
      });
  };