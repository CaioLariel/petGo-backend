import { Request, Response } from 'express';
import db from '../utils/db';

// Criar animal (já existe)
export const createAnimal = async (req: Request, res: Response) => {
  const { name, breed, age, created_by } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO animals (name, breed, age, created_by) VALUES (?, ?, ?, ?)',
      [name, breed, age, created_by || null]
    );
    res.status(201).json({ message: 'Animal criado', id: (result as any).insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar animal' });
  }
};

// Editar animal
export const updateAnimal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, breed, age, created_by } = req.body;

  try {
    await db.query(
      'UPDATE animals SET name = ?, breed = ?, age = ?, created_by = ? WHERE id = ?',
      [name, breed, age, created_by || null, id]
    );
    res.json({ message: 'Animal atualizado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar animal' });
  }
};

// Deletar animal
export const deleteAnimal = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM animals WHERE id = ?', [id]);
    res.json({ message: 'Animal deletado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar animal' });
  }
};
