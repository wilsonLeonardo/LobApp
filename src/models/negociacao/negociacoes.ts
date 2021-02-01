import {
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { NEGOCIACAO } from '~/utils/constants';

import { ImobiliariaLoteamentoLotes } from '../imobiliaria/imobiliria.loteamento.lotes';
import { Usuario } from '../usuario/usuario';

@Table({
  tableName: NEGOCIACAO,
  modelName: NEGOCIACAO,
})
export class Negociacao extends BaseEntity<Negociacao> {
  @ForeignKey(() => Usuario)
  @Column
  public usuarioId!: number;

  @ForeignKey(() => ImobiliariaLoteamentoLotes)
  @Column
  public loteId!: number;

  @Column(DataType.STRING(200))
  public ultimaMensagem!: string;

  @Column(DataType.STRING(10))
  public pendentePor!: string;

  @BelongsTo(() => Usuario, {
    foreignKey: 'usuarioId',
  })
  public usuario: Usuario;

  @BelongsTo(() => ImobiliariaLoteamentoLotes, {
    foreignKey: 'loteId',
  })
  public lote: ImobiliariaLoteamentoLotes;
}
