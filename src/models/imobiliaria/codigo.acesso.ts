import { Table, Column } from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { CODIGO_ACESSO } from '~/utils/constants';

@Table({ tableName: CODIGO_ACESSO, modelName: CODIGO_ACESSO })
export class CodigoAcesso extends BaseEntity<CodigoAcesso> {
  @Column
  public codigo!: string;

  @Column
  public active!: boolean;
}
