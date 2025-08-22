import { client } from './db-client.js';

export const countryDataMapper = {

  // Get all countries
  async findAll() {
    const result = await client.query(`
      SELECT *
      FROM country
      ORDER BY name
    `);
    const countries = result.rows;
    return countries;
  },

  // Get country by id
  async findById(id) {
    const result = await client.query(`
      SELECT *
      FROM country
      WHERE id = $1
    `, [id]);
    const country = result.rows[0];
    return country || null;
  }
  
};