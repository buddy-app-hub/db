module.exports = {
  async up(db, client) {
    await db.createCollection('buddies');
  },

  async down(db, client) {
    await db.collection('buddies').drop();
  }
};
