import SequelizeStatic, { QueryInterface } from 'sequelize';

import { IMOBILIARIA_LOTEAMENTO_LOTES_TIPO } from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(IMOBILIARIA_LOTEAMENTO_LOTES_TIPO, {
      ...migrationDefaults(Sequelize),
      tipo: Sequelize.DataTypes.STRING,
      active: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(IMOBILIARIA_LOTEAMENTO_LOTES_TIPO);
  },
};
