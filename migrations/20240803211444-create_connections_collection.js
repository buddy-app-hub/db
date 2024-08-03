module.exports = {
  async up(db, client) {
    await db.createCollection('connections');
  },

  async down(db, client) {
    await db.collection('connections').drop();
  }
};
