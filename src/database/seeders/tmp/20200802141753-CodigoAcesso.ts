import { QueryInterface } from 'sequelize';

import { CODIGO_ACESSO } from '~/utils/constants';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert(CODIGO_ACESSO, [
      {
        codigo: '$4ff5@avdsW1',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        codigo: '-Mvd%im*ashW',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        codigo: 'A&-0mbCdeLO#',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        codigo: 'E@!8*maLpQ5c',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        codigo: 'O#opS5$a6&86',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete(CODIGO_ACESSO, null, {});
  },
};
