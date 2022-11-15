import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import validateNewUser from '../validations/validateNewUser';

class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async getAll(): Promise<IUser[]> {
    return this.userModel.getAll();
  }

  async getById(id: number): Promise<IUser> {
    return this.userModel.getById(id);
  }

  async create(newUser: IUser): Promise<number> {
    await validateNewUser(newUser);
    return this.userModel.create(newUser);
  }

  async update(id: number, user: IUser): Promise<void> {
    this.userModel.update(id, user);
  }

  async destroy(id: number): Promise<void> {
    this.userModel.destroy(id);
  }
}

export default UserService;