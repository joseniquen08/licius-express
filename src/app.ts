import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import commentRoutes from './comment/routes/commentRoutes';
import postRoutes from './post/routes/postRoutes';
import userRoutes from './user/routes/user.routes';
import mercadoPagoRoutes from './mercado-pago/routes/mercadoPagoRoutes';
const cors = require('cors');

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cors()); 

app.use(userRoutes);
app.use(postRoutes);
app.use(commentRoutes);
app.use(mercadoPagoRoutes)

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res.status(err.status ? err.status : 500).send({ message: err.message, type: err.type });
});

export default app;