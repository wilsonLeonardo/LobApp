import {
  Table,
  Column,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { IMOBILIARIA_LOTEAMENTO } from '~/utils/constants';

import { Usuario } from '../usuario/usuario';
import { ImobiliariaLoteamentoLotes } from './imobiliria.loteamento.lotes';

@Table({
  tableName: IMOBILIARIA_LOTEAMENTO,
  modelName: IMOBILIARIA_LOTEAMENTO,
})
export class ImobiliariaLoteamento extends BaseEntity<ImobiliariaLoteamento> {
  @Column
  public nome!: string;

  @Column
  public estado!: string;

  @Column
  public cidade!: string;

  @HasMany(() => ImobiliariaLoteamentoLotes, {
    foreignKey: 'loteamentoId',
  })
  public lotes!: ImobiliariaLoteamentoLotes[];

  @ForeignKey(() => Usuario)
  @Column
  public usuarioId!: number;

  @BelongsTo(() => Usuario, {
    foreignKey: 'usuarioId',
  })
  public usuario!: Usuario;
}
