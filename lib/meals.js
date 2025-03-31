const sql = require('better-sqlite3')
const db = sql('meals.db')

export function getMeals() {
  return db.prepare('SELECT * FROM meals').all()
}
