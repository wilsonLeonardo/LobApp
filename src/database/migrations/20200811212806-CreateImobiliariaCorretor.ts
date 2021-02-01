import SequelizeStatic, { QueryInterface } from 'sequelize';

import { IMOBILIARIA_CORRETOR, USUARIO } from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(IMOBILIARIA_CORRETOR, {
      ...migrationDefaults(Sequelize),
      imobiliariaId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: USUARIO,
          key: 'id',
        },
      },
      corretorId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: USUARIO,
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(IMOBILIARIA_CORRETOR);
  },
};
