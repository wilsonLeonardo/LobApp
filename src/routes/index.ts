import { Router } from 'express';

import { AuthenticationRouter } from './authentication';
import { TreinamentosRouter } from './treinamentos';
// import { UsuarioRouter } from './usuario';

const router = Router();

router.use('/auth', AuthenticationRouter);
// router.use('/user', UsuarioRouter);
router.use('/treinamento', TreinamentosRouter);

export { router };
