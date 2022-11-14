/* eslint-disable camelcase */
import Joi from 'joi';
import { IProduct } from '../interfaces';

const newProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  brand: Joi.string().min(3).required(),
  price: Joi.number().min(0).required(),
  manufacturing_date: Joi.date().required(),
  expiration_date: Joi.date().required(),
});

export function validateNewProduct(newProduct: IProduct): void {
  const { error } = newProductSchema.validate(newProduct);
  if (error) throw error;

  if (newProduct.manufacturing_date === newProduct.expiration_date) {
    throw new Error('As datas de fabricação e validade não podem ser iguais');
  }

  if (newProduct.manufacturing_date > newProduct.expiration_date) {
    throw new Error('A data de fabricação não pode ser superior à de validade');
  }
}

export function validatePriceQueryParams(min: number, max: number): void {
  if (min < 0 || max < 0) throw new Error('Os preços não podem ser negativos');
  if (min > max) throw new Error('O preço mínimo não pode ser maior que o máximo');
}