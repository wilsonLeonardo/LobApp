import SequelizeStatic, { QueryInterface } from 'sequelize';

import {
  NEGOCIACAO,
  USUARIO,
  IMOBILIARIA_LOTEAMENTO_LOTES,
} from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(
      NEGOCIACAO,
      {
        ...migrationDefaults(Sequelize),
        usuarioId: {
          type: Sequelize.DataTypes.INTEGER,
          unique: 'actionsUnique',
          references: {
            model: USUARIO,
            key: 'id',
          },
        },
        loteId: {
          type: Sequelize.DataTypes.INTEGER,
          unique: 'actionsUnique',
          references: {
            model: IMOBILIARIA_LOTEAMENTO_LOTES,
            key: 'id',
          },
        },
        ultimaMensagem: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
        pendentePor: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        uniqueKeys: {
          actionsUnique: {
            fields: ['usuarioId', 'loteId'],
          },
        },
      }
    );
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(NEGOCIACAO);
  },
};
