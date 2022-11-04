import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

require('dotenv');

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  if (!token) throw new Error('Token not found');

  try {
    const decoded = jwt.verify(token, secret as string);
    req.body.user = decoded;
    next();
  } catch (e) {
    console.log(e);
  }
};
