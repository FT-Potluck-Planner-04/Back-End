
exports.seed = function(knex) {
    return knex('potluck_invitees').del()
      .then(function () {
        return knex('potluck_invitees').insert([
          {user_id: '1', potluck_id: '1', attending: 1},
          {user_id: '1', potluck_id: '2', attending: 1},
          {user_id: '2', potluck_id: '1', attending: 1},
          {user_id: '2', potluck_id: '2', attending: 1},
          {user_id: '3', potluck_id: '1', attending: 1},
          {user_id: '3', potluck_id: '2', attending: 1},
        ]);
      });
  };