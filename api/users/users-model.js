const db = require('../data/db-config')


const findById = (id) => {
    return db('users')
    .where('user_id', id)
    .first()
}

function findBy(filter) {
    return db('users')
      .where(filter)
      .first();
  }
  //**************************Peter's**************************/
  function update(id, changes) {
    return db("users").where({id}).update(changes)
}

function remove(id) {
    return db("users").where({id}).del()
}
function getInvited(id) {
    return db.select("f.RSVP", "e.id", "e.title", "e.description", "e.month", "e.day", "e.year", "e.time_From", "e.time_To", "e.location")
    .from("users as u")
    .join("friends as f", "f.userID", "=", "u.id")
    .join("events_friends as EF", "f.id", "=", "EF.userID")
    .join("events as e" ,"e.id", "=", "EF.eventsID")
    .where("f.userID", id)
}

//*****************************************************************/

const add = async (user) => {
    await db('users')
    .insert(user)

    return findBy({username: user.username})
}

module.exports = {
    findById,
    add,
    findBy,
    update,
    remove,
    getInvited
}
