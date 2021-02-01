import { Router } from 'express';

import TreinamentosController from '~/controllers/treinamentos';
import { authMiddleware } from '~/middlewares';

const router = Router();

router.post('/', TreinamentosController.create);
router.delete('/delete/:id', TreinamentosController.delete);
router.patch('/update/:id', TreinamentosController.update);
router.get('/findByName', TreinamentosController.findByName);
router.get('/findAll', TreinamentosController.index);

export { router as TreinamentosRouter };
