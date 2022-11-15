import express, { ErrorRequestHandler } from 'express';
import 'express-async-errors';
import ProductController from './controllers/Product.controller';

const app = express();
const productsRoute = '/products';
const productController = new ProductController();

app.use(express.json());

app.get(`${productsRoute}/price`, productController.getByPriceRange);
app.get(`${productsRoute}/dates`, productController.getByValidDate);
app.get(`${productsRoute}/:id`, productController.getbyId);
app.delete(`${productsRoute}/:id`, productController.destroy);
app.put(`${productsRoute}/:id`, productController.update);
app.get(productsRoute, productController.getAll);
app.post(productsRoute, productController.create);

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
};

app.use(errorMiddleware);

export default app;