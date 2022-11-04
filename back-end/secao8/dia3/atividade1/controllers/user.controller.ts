import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import UserService from '../services/user.service';

class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(200).json(users);
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await this.userService.getById(id);
    res.status(200).json(user);
  };

  create = async (req: Request, res: Response) => {
    const newUser: IUser = req.body;
    const insertId = await this.userService.create(newUser);
    res.status(201).json({ id: insertId, ...newUser });
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user: IUser = req.body;
    await this.userService.update(id, user);
    res.status(201).json({ message: 'Usuário atualizado' });
  };

  destroy = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.destroy(id);
    res.status(201).json({ message: 'Usuário removido' });
  };
}

export default UserController;