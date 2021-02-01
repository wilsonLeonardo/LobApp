import { QueryInterface } from 'sequelize';

import { USUARIO_PERFIL } from '~/utils/constants';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert(USUARIO_PERFIL, [
      {
        perfil: 'Imobiliaria',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        perfil: 'Corretora',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete(USUARIO_PERFIL, null, {});
  },
};
