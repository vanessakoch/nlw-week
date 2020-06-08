import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// Rota: endereço completo da requisição
// Recurso: Qual entidade estamos acessando no sistema

// GET: buscar uma ou mais info do backend
// POST: criar uma nova info no backend
// PUT: atualizar uma info existente no backend
// DELETE: remover uma info do backend

// Request Param: parametros que vem na propria rota que identificam um recurso;
// Query Param: parametros que vem na propria rota, opcionais pra filtros, paginações
// Request Body: parametros para criação e atualização de informações
