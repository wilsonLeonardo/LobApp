import { QueryInterface } from 'sequelize';

import { IMOBILIARIA_LOTEAMENTO_LOTES_TIPO } from '~/utils/constants';

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert(IMOBILIARIA_LOTEAMENTO_LOTES_TIPO, [
      {
        tipo: 'Casa',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Apartamento',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Fazenda',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Terreno',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete(
      IMOBILIARIA_LOTEAMENTO_LOTES_TIPO,
      null,
      {}
    );
  },
};
