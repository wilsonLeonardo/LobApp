import SequelizeStatic, { QueryInterface } from 'sequelize';

import { IMOBILIARIA_LOTEAMENTO_LOTES } from '~/utils/constants';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.addColumn(
      IMOBILIARIA_LOTEAMENTO_LOTES,
      'imageFileName',
      {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      }
    );
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.removeColumn(
      IMOBILIARIA_LOTEAMENTO_LOTES,
      'imageFileName'
    );
  },
};
