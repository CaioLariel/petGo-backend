import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import animalRoutes from './routes/animalRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/animals', animalRoutes);

app.get('/', (req, res) => {
  res.send('Backend PetGo rodando!');
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
