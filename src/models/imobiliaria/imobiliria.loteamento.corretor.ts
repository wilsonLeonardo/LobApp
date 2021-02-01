import { Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { IMOBILIARIA_CORRETOR } from '~/utils/constants';

import { Usuario } from '../usuario/usuario';

@Table({
  tableName: IMOBILIARIA_CORRETOR,
  modelName: IMOBILIARIA_CORRETOR,
})
export class ImobiliariaCorretor extends BaseEntity<ImobiliariaCorretor> {
  @ForeignKey(() => Usuario)
  @Column
  public imobiliariaId!: number;

  @ForeignKey(() => Usuario)
  @Column
  public corretorId!: number;

  @BelongsTo(() => Usuario, {
    foreignKey: 'corretorId',
    as: 'Corretor',
  })
  public corretor!: Usuario;

  @BelongsTo(() => Usuario, {
    foreignKey: 'imobiliariaId',
    as: 'Imobiliaria',
  })
  public imobiliaria!: Usuario;
}
