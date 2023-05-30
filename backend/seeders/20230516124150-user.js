/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'jondoe@krs.net',
      password: '$2a$12$ecw.DLU.BgROjQvh/ZaAyOcoZB6VMJbt/mHH.KZ0WuvdmIyXUE7gW',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
