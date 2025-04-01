const sql = require('better-sqlite3')
const db = sql('meals.db')

export function getMeals() {
  // throw new Error('Something went wrong!')
  return db.prepare('SELECT * FROM meals').all()
}


export function getMeal(slug){
  return db.prepare('SELECT * FROM meals where slug = ?').get(slug)
}