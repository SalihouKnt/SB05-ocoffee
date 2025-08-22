import { client } from './db-client.js';

export const coffeeDataMapper = {

  // Get all coffees
  async findAll() {
    const result = await client.query(`
      SELECT
        coffee.*,
        country.name AS origin
      FROM coffee
      JOIN country ON coffee.country_id = country.id
      ORDER BY coffee.name
    `);
    const products = result.rows;
    return products;
  },

  // Get all coffees with categories And origin
  async findAllWithCategories() {
    const result = await client.query(`
      SELECT
        coffee.*,
        country.name AS origin,
        array_agg(category.name) AS categories
      FROM coffee
      JOIN country ON coffee.country_id = country.id
      JOIN coffee_category ON coffee.id = coffee_category.coffee_id
      JOIN category ON coffee_category.category_id = category.id
      GROUP BY coffee.id, country.name
      ORDER BY coffee.name
    `);
    const products = result.rows;
    return products;
  },

  // Get latest n coffees available
  async findLatest(n) {
    const result = await client.query(`
      SELECT *
      FROM coffee
      WHERE available
      ORDER BY created_at
      DESC LIMIT $1
    `, [n]);
    const products = result.rows;
    return products;
  },

  // Get coffee by id
  async findById(id) {
    const result = await client.query(`
      SELECT
        coffee.*,
        country.name AS origin,
        array_agg(category.name) AS categories
      FROM coffee
      JOIN country ON coffee.country_id = country.id
      JOIN coffee_category ON coffee.id = coffee_category.coffee_id
      JOIN category ON coffee_category.category_id = category.id
      WHERE coffee.id = $1
      GROUP BY coffee.id, country.name
      `, [id]);
    const product = result.rows[0];
    return product || null;
  },

};