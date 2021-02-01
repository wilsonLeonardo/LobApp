import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

import { genToken } from '~/services/token';
import { Role } from '~/utils/constants';

import { successMessage, failMessage } from '../helpers/handleResponse';

export default {
  async create(req: Request, res: Response) {
    const t = await req.database.transaction();
    try {
      const { values } = req.body;

      const usuarioJson = {
        nome: values.nome,
        login: values.email,
        creci: values.creci,
        senha: values.senha,
        usuarioPerfilID: Role.Corretor,
        imageFileName: values.imagemUri,
      };

      const usuario = await req.models.Usuario.create(usuarioJson, {
        transaction: t,
      });

      const enderecoJson = {
        cep: values.cep,
        cidade: values.cidade,
        estado: values.estado,
        usuarioId: usuario.id,
      };

      await req.models.Endereco.create(enderecoJson, {
        transaction: t,
      });

      const token = genToken(usuario);

      await t.commit();

      return res.send(
        successMessage(
          await req.models.Usuario.findByPk(usuario.id, {
            include: [
              req.models.Endereco,
              {
                model: req.models.UsuarioPerfil,
              },
            ],
          }),
          { message: 'Usuário cadastrado com sucesso', token },
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
            'Erro ao cadastrar usuário',
            error
          )
        );
    }
  },
  async findByCreci(req: Request, res: Response) {
    try {
      const { creci } = req.params;

      const corretor = await req.models.Usuario.findOne({
        where: { creci },
        include: ['endereco'],
      });

      if (!corretor) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .send(failMessage(HttpStatus.NOT_FOUND, 'Usuário não encontrado'));
      }

      const meuCorretor = await req.models.ImobiliariaCorretor.findOne({
        where: { imobiliariaId: req.user.id, corretorId: corretor.id },
      });

      if (meuCorretor) {
        return res
          .status(HttpStatus.CONFLICT)
          .send(
            failMessage(
              HttpStatus.CONFLICT,
              'Você já possui esse usuário cadastrado!'
            )
          );
      }

      return res.send(successMessage(corretor));
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(
          failMessage(
            HttpStatus.BAD_REQUEST,
            'Erro ao encontrar usuário',
            error
          )
        );
    }
  },
};
