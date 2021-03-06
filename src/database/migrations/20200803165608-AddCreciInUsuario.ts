import SequelizeStatic, { QueryInterface } from 'sequelize';

import { USUARIO } from '~/utils/constants';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof SequelizeStatic) {
    return queryInterface.addColumn(USUARIO, 'creci', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
      unique: true,
    });
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.removeColumn(USUARIO, 'creci');
  },
};
