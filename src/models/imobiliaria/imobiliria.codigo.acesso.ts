import { Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { IMOBILIARIA_CODIGO_ACESSO } from '~/utils/constants';

import { Usuario } from '../usuario/usuario';
import { CodigoAcesso } from './codigo.acesso';

@Table({
  tableName: IMOBILIARIA_CODIGO_ACESSO,
  modelName: IMOBILIARIA_CODIGO_ACESSO,
})
export class ImobiliariaCodigoAcesso extends BaseEntity<
  ImobiliariaCodigoAcesso
> {
  @ForeignKey(() => CodigoAcesso)
  @Column
  public codigoId!: number;

  @ForeignKey(() => Usuario)
  @Column
  public usuarioId!: number;

  @BelongsTo(() => CodigoAcesso, {
    foreignKey: 'codigoId',
  })
  public perfil: CodigoAcesso;
}
