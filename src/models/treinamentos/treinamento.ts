import {
  Table,
  Column,
  BelongsTo,
  HasMany,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';

import { BaseEntity } from '~/utils/base.model';
import { TREINAMENTOS } from '~/utils/constants';

import { Endereco } from '../usuario/endereco';

@Table({ tableName: TREINAMENTOS, modelName: TREINAMENTOS })
export class Treinamentos extends BaseEntity<Treinamentos> {
  @Column
  public nome!: string;

  @Column
  public linkTreinamento!: string;

  @ForeignKey(() => Endereco)
  @Column
  public tipoPlantioID!: number;

  @BelongsTo(() => Endereco, {
    foreignKey: 'tipoPlantioID',
  })
  public tipoPlantio: Endereco;
}
