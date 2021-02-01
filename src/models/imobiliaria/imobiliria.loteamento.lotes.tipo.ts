import { Table, Column } from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { IMOBILIARIA_LOTEAMENTO_LOTES_TIPO } from '~/utils/constants';

@Table({
  tableName: IMOBILIARIA_LOTEAMENTO_LOTES_TIPO,
  modelName: IMOBILIARIA_LOTEAMENTO_LOTES_TIPO,
})
export class ImobiliariaLoteamentoLotesTipo extends BaseEntity<
  ImobiliariaLoteamentoLotesTipo
> {
  @Column
  public tipo!: string;

  @Column
  public active!: boolean;
}
