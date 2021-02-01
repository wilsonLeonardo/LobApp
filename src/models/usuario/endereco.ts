import { Table, Column, ForeignKey, DataType } from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { ENDERECO } from '~/utils/constants';

import { Usuario } from './usuario';

@Table({ tableName: ENDERECO, modelName: ENDERECO })
export class Endereco extends BaseEntity<Endereco> {
  @Column(DataType.STRING(8))
  public cep!: string;

  @Column
  public estado!: string;

  @Column
  public cidade!: string;

  @ForeignKey(() => Usuario)
  @Column
  public usuarioId!: number;
}
