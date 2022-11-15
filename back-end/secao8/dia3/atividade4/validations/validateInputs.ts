import Joi from 'joi';
import { IRestaurant } from '../interfaces';

const newRestaurantSchema = Joi.object({
  name: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  openingTime: Joi.string().required(),
  closingTime: Joi.string().required(),
});

export default function validateNewRestaurant(newRestaurant: IRestaurant): void {
  const { error } = newRestaurantSchema.validate(newRestaurant);
  if (error) throw error;
}