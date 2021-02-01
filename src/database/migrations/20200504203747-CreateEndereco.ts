import SequelizeStatic, { QueryInterface } from 'sequelize';

import { ENDERECO, USUARIO } from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(ENDERECO, {
      ...migrationDefaults(Sequelize),
      cep: Sequelize.DataTypes.STRING,
      estado: Sequelize.DataTypes.STRING,
      cidade: Sequelize.DataTypes.STRING,
      usuarioId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: USUARIO,
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(ENDERECO);
  },
};
