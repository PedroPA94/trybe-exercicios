import 'dotenv';
import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class LoginService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async loginUser(user: ILogin): Promise<string> {
    const { email, password } = user;
    const validateUser = await this.userModel.getByEmail(email);

    if (!validateUser || validateUser.password !== password) throw new Error('Usuário inválido');

    const token = jwt.sign({ email }, process.env.JWT_SECRET as string);
    return token;
  }
}