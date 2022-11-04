import Joi from 'joi';
import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';

const schema = Joi.object<IUser>({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

export default async (newUser: IUser): Promise<IUser> => {
  const { email } = newUser;
  const userModel = new UserModel(connection);

  const user = await userModel.getByEmail(email);

  if (user) throw new Error('Email já cadastrado');

  const { error, value } = schema.validate(newUser);

  if (error) throw error;

  return value;
};