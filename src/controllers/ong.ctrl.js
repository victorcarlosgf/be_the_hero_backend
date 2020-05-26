const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async list(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async listIncidents(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
}