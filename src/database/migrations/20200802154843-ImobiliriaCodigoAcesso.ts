import SequelizeStatic, { QueryInterface } from 'sequelize';

import {
  USUARIO,
  CODIGO_ACESSO,
  IMOBILIARIA_CODIGO_ACESSO,
} from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(IMOBILIARIA_CODIGO_ACESSO, {
      ...migrationDefaults(Sequelize),
      usuarioId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: USUARIO,
          key: 'id',
        },
      },
      codigoId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: CODIGO_ACESSO,
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(IMOBILIARIA_CODIGO_ACESSO);
  },
};
