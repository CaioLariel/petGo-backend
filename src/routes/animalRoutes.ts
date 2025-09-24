import { Router } from 'express';
import { createAnimal, updateAnimal, deleteAnimal } from '../controllers/animalController';

const router = Router();

router.post('/', createAnimal);
router.put('/:id', updateAnimal);      // Editar animal
router.delete('/:id', deleteAnimal);   // Deletar animal

export default router;
