module.exports = {
  async up(db, client) {
    await db.collection('elders').createIndex({ "personalData.address.coordinates": "2dsphere" })
  },

  async down(db, client) {
    await db.collection('elders').dropIndex("personalData.address.coordinates_2dsphere");
  }
};
