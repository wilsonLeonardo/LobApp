import SequelizeStatic, { QueryInterface } from 'sequelize';

import { TREINAMENTOS, ENDERECO } from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(TREINAMENTOS, {
      ...migrationDefaults(Sequelize),
      nome: Sequelize.DataTypes.STRING,
      linkTreinamento: Sequelize.DataTypes.STRING,
      tipoPlantioID: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: ENDERECO,
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(TREINAMENTOS);
  },
};
