import express, { ErrorRequestHandler } from 'express';
import 'express-async-errors';
import RestaurantController from './controllers/Restaurant.controller';

const app = express();
const restaurantsRoute = '/restaurants';
const restaurantController = new RestaurantController();

app.use(express.json());

app.get(`${restaurantsRoute}/open`, restaurantController.getOpenRestaurants);
app.get(`${restaurantsRoute}/:id`, restaurantController.getById);
app.put(`${restaurantsRoute}/:id`, restaurantController.update);
app.delete(`${restaurantsRoute}/:id`, restaurantController.destroy);
app.get(restaurantsRoute, restaurantController.getAll);
app.post(restaurantsRoute, restaurantController.create);

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
};

app.use(errorMiddleware);

export default app;