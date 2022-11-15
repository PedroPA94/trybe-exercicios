import express, { ErrorRequestHandler } from 'express';
import 'express-async-errors';
import LoginController from './controllers/login.controller';
import UserController from './controllers/user.controller';
import auth from './middlewares/auth';

const app = express();
app.use(express.json());

const loginController = new LoginController();

const userController = new UserController();
const usersPath = '/users';

app.post('/login', loginController.loginUser);

app.get(usersPath, userController.getAll);
app.get(`${usersPath}/:id`, userController.getById);
app.post(usersPath, userController.create);

app.use(auth);
app.put(`${usersPath}/:id`, userController.update);
app.delete(`${usersPath}/:id`, userController.destroy);

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
};

app.use(errorMiddleware);

export default app;