module.exports = {
  async up(db, client) {
    await db.createCollection('elders');
  },

  async down(db, client) {
    await db.collection('elders').drop();
  }
};