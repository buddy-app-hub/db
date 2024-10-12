module.exports = {
  async up(db, client) {
    await db.collection('buddies').createIndex({ "personalData.address.coordinates": "2dsphere" })
  },

  async down(db, client) {
    await db.collection('buddies').dropIndex("personalData.address.coordinates_2dsphere");
  }
};
