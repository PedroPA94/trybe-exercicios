import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IUser[]> {
    const [users] = await this.connection.execute<(IUser & RowDataPacket)[]>('SELECT * FROM Users');
    return users;
  }

  async getById(id: number): Promise<IUser> {
    const [[user]] = await this.connection.execute<(
      IUser & RowDataPacket[])[]>
      (
        'SELECT * FROM Users WHERE id= ?',
        [id],
      );
    return user;
  }

  async create(newUser: IUser): Promise<number> {
    const { name, email, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    return insertId; 
  }

  async update(id: number, user: IUser): Promise<void> {
    const { name, email, password } = user;
    await this.connection.execute(
      'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
      [name, email, password, id],
    );
  }

  async destroy(id: number): Promise<void> {
    await this.connection.execute(
      'DELETE FROM Users WHERE id=?',
      [id],
    );
  }

  async getByEmail(email: string): Promise<IUser> {
    const [[user]] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      'SELECT * FROM Users WHERE email=?',
      [email],
    );
    return user;
  }
}

export default UserModel;