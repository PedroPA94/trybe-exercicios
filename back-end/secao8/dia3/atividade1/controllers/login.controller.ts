import { Request, Response } from 'express';
import { ILogin } from '../interfaces';
import LoginService from '../services/login.service';

export default class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  loginUser = async (req: Request, res: Response) => {
    const user: ILogin = req.body;
    const token = await this.loginService.loginUser(user);
    res.status(200).json({ token });
  };
}