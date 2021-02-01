import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

import { successMessage, failMessage } from '../helpers/handleResponse';

export default {
  async uploadImage(req: Request, res: Response) {
    try {
      const imageFileName = (req.file as any).location;

      return res.send(successMessage({ url: imageFileName }));
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(failMessage(HttpStatus.BAD_REQUEST, 'Falha ao alterar avatar'));
    }
  },
  async deviceIdentifier(req: Request, res: Response) {
    try {
      const { token } = req.body;

      const { user } = req;

      user.deviceIdentifier = token;

      await user.save();

      return res.send(
        successMessage({ message: 'Token inserido com sucesso' })
      );
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(failMessage(HttpStatus.BAD_REQUEST, 'Falha ao inserir token'));
    }
  },
  async profile(req: Request, res: Response) {
    try {
      if (req.user && req.user.id) {
        const user = await req.models.Usuario.findByPk(req.user.id, {
          attributes: [
            'id',
            'login',
            'creci',
            'nome',
            'active',
            'imageFileName',
            'usuarioPerfilID',
            'createdAt',
            'updatedAt',
            'deletedAt',
          ],
          include: [
            req.models.Endereco,
            {
              model: req.models.UsuarioPerfil,
            },
          ],
        });
        return res.send(successMessage(user));
      }

      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send(
          failMessage(
            HttpStatus.INTERNAL_SERVER_ERROR,
            'Falha ao encontrar usuário'
          )
        );
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send(failMessage(HttpStatus.BAD_REQUEST, 'Falha ao retornar perfil'));
    }
  },
};
