import { Pool, RowDataPacket } from 'mysql2/promise';
import IPost from '../interfaces';

export default class PostModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findAll(): Promise<IPost[]> {
    const [posts] = await this.connection.execute<IPost[] & RowDataPacket[]>(
      'SELECT * FROM Posts',
    );
    return posts;
  }

  async findById(id: number): Promise<IPost> {
    const [[post]] = await this.connection.execute<IPost[] & RowDataPacket[][]>(
      'SELECT * FROM Posts WHERE id=?',
      [id],
    );
    return post;
  }

  async create(newPost: IPost): Promise<void> {
    const { author, title, category } = newPost;
    const date = new Date();
    const publicationDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    await this.connection.execute(
      'INSERT INTO Posts (author, title, category, publicationDate) VALUES (?, ?, ?, ?)',
      [author, title, category, publicationDate],
    );
  }

  async update(newPost: IPost, id: number): Promise<void> {
    const { author, title, category } = newPost;
    await this.connection.execute(
      'UPDATE Posts SET author=?, title=?, category=? WHERE id=?',
      [author, title, category, id],
    );
  }

  async destroy(id: number): Promise<void> {
    await this.connection.execute(
      'DELETE FROM Posts WHERE id=?',
      [id],
    );
  }

  async findByTerm(term: string): Promise<IPost[]> {
    const [posts] = await this.connection.execute<IPost[] & RowDataPacket[]>(
      'SELECT * FROM Posts WHERE author LIKE ? OR category LIKE ? OR publicationDate LIKE ?',
      [`%${term}%`, `%${term}%`, `${term}%`],
    );
    return posts;
  }
}