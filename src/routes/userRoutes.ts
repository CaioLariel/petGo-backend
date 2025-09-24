import { Router } from 'express';
import { createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.put('/:id', updateUser);      // Editar usuário
router.delete('/:id', deleteUser);   // Deletar usuário

export default router;
