import SequelizeStatic, { QueryInterface } from 'sequelize';

import {
  IMOBILIARIA_LOTEAMENTO,
  IMOBILIARIA_LOTEAMENTO_LOTES,
  IMOBILIARIA_LOTEAMENTO_LOTES_TIPO,
} from '~/utils/constants';

import { migrationDefaults } from '../defaults';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.createTable(IMOBILIARIA_LOTEAMENTO_LOTES, {
      ...migrationDefaults(Sequelize),
      nome: Sequelize.DataTypes.STRING,
      latitude: Sequelize.DataTypes.STRING,
      longitude: Sequelize.DataTypes.STRING,
      area: Sequelize.DataTypes.FLOAT,
      eixoX: Sequelize.DataTypes.FLOAT,
      eixoY: Sequelize.DataTypes.FLOAT,
      valor: Sequelize.DataTypes.FLOAT,
      cep: Sequelize.DataTypes.STRING,
      numero: Sequelize.DataTypes.INTEGER,
      status: Sequelize.DataTypes.BOOLEAN,
      loteamentoId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: IMOBILIARIA_LOTEAMENTO,
          key: 'id',
        },
      },
      loteamentoTipoId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: IMOBILIARIA_LOTEAMENTO_LOTES_TIPO,
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(IMOBILIARIA_LOTEAMENTO_LOTES);
  },
};
