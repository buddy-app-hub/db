module.exports = {
  async up(db, client) {
    await db.collection('connections').createIndex(
      { elderID: 1, buddyID: 1 },
      { unique: true, name: "unique_elder_buddy_connection" }
    )     
  },

  async down(db, client) {
    await db.collection('connections').dropIndex("unique_elder_buddy_connection")
  }
};
