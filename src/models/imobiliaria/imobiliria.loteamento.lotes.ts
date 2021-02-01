import {
  Table,
  Column,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { IMOBILIARIA_LOTEAMENTO_LOTES } from '~/utils/constants';

import { ImobiliariaLoteamento } from './imobiliria.loteamento';
import { ImobiliariaLoteamentoLotesTipo } from './imobiliria.loteamento.lotes.tipo';

@Table({
  tableName: IMOBILIARIA_LOTEAMENTO_LOTES,
  modelName: IMOBILIARIA_LOTEAMENTO_LOTES,
})
export class ImobiliariaLoteamentoLotes extends BaseEntity<
  ImobiliariaLoteamentoLotes
> {
  @Column
  public nome!: string;

  @Column
  public latitude!: string;

  @Column
  public longitude!: string;

  @AllowNull
  @Column
  public imageFileName!: string;

  @Column
  public area!: number;

  @Column
  public eixoX!: number;

  @Column
  public eixoY!: number;

  @Column
  public valor!: number;

  @Column
  public cep!: string;

  @Column
  public numero!: number;

  @Column
  public status!: boolean;

  @ForeignKey(() => ImobiliariaLoteamento)
  @Column
  public loteamentoId!: number;

  @BelongsTo(() => ImobiliariaLoteamento, {
    foreignKey: 'loteamentoId',
  })
  public loteamento: ImobiliariaLoteamento;

  @ForeignKey(() => ImobiliariaLoteamentoLotesTipo)
  @Column
  public loteamentoTipoId!: number;

  @BelongsTo(() => ImobiliariaLoteamentoLotesTipo, {
    foreignKey: 'loteamentoTipoId',
  })
  public tipo: ImobiliariaLoteamentoLotesTipo;
}
