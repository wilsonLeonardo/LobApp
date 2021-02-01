import SequelizeStatic, { QueryInterface } from 'sequelize';

import { CODIGO_ACESSO } from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(CODIGO_ACESSO, {
      ...migrationDefaults(Sequelize),
      codigo: Sequelize.DataTypes.STRING,
      active: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(CODIGO_ACESSO);
  },
};
