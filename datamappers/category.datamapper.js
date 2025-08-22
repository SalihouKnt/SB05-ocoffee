import { client } from './db-client.js';

export const categoryDataMapper = {

  // Get all categories
  async findAll() {
    const result = await client.query(`
      SELECT *
      FROM category
      ORDER BY name
    `);
    const categories = result.rows;
    return categories;
  },

  // Get category by id
  async findById(id) {
    const result = await client.query(`
      SELECT *
      FROM category
      WHERE id = $1
    `, [id]);
    const category = result.rows[0];
    return category || null;
  },

  // Get used categories and 
  // count the number of coffees in each category
  async findUsed() {
    const result = await client.query(`
      SELECT
        category.*,
        COUNT(coffee_category.coffee_id) AS coffee_count
      FROM category
      JOIN coffee_category ON category.id = coffee_category.category_id
      GROUP BY category.id
      ORDER BY name
    `);
    const categories = result.rows;
    return categories;
  }

};

console.log(await categoryDataMapper.findUsed());