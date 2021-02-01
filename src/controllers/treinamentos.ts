import CEP from 'cep-promise';
import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

import { successMessage, failMessage } from '../helpers/handleResponse';

export default {
  async create(req: Request, res: Response) {
    const t = await req.database.transaction();
    try {
      const { values } = req.body;

      const treinamentoJson = {
        nome: values.nome,
        linkTreinamento: values.linkTreinamento,
        tipoPlantioID: values.plantioID,
      };

      await req.models.Treinamentos.create(treinamentoJson, {
        transaction: t,
      });

      await t.commit();

      return res.send(
        successMessage(
          { message: 'Treinamento foi cadastrado com sucesso' },
          HttpStatus.CREATED
        )
      );
    } catch (error) {
      await t.rollback();
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(
          failMessage(
            HttpStatus.BAD_REQUEST,
            'Erro ao cadastrar treinamento',
            error
          )
        );
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, linkTreinamento } = req.body;

      const treinamento = await req.models.Treinamentos.findByPk(id);

      treinamento.nome = nome || treinamento.nome;
      treinamento.linkTreinamento =
        linkTreinamento || treinamento.linkTreinamento;

      await treinamento.save();

      return res.send(
        successMessage(
          { message: 'Treinamento foi atualizado com sucesso' },
          HttpStatus.CREATED
        )
      );
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(
          failMessage(
            HttpStatus.BAD_REQUEST,
            'Erro ao atualizar treinamento',
            error
          )
        );
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const treinamento = await req.models.Treinamentos.findByPk(id);

      await treinamento.destroy();

      return res.send(
        successMessage(
          { message: 'Treinamento foi deletado com sucesso' },
          HttpStatus.CREATED
        )
      );
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(
          failMessage(
            HttpStatus.BAD_REQUEST,
            'Erro ao deletar treinamento',
            error
          )
        );
    }
  },
  async index(req: Request, res: Response) {
    try {
      const treinamento = await req.models.Treinamentos.findAll();

      return res.send(successMessage(treinamento, HttpStatus.CREATED));
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(
          failMessage(
            HttpStatus.BAD_REQUEST,
            'Erro ao encontrar treinamentos',
            error
          )
        );
    }
  },
  async findByName(req: Request, res: Response) {
    try {
      const { nome } = req.body;

      const treinamento = await req.models.Treinamentos.findOne({
        where: { nome },
      });

      return res.send(successMessage(treinamento, HttpStatus.CREATED));
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(
          failMessage(
            HttpStatus.BAD_REQUEST,
            'Erro ao encontrar treinamentos',
            error
          )
        );
    }
  },
};
