import { Pool, RowDataPacket } from 'mysql2/promise';
import { IRestaurant } from '../interfaces';

export default class RestaurantModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IRestaurant[]> {
    const [restaurants] = await this.connection.execute<IRestaurant[] & RowDataPacket[]>(
      'SELECT * FROM Restaurants',
    );
    return restaurants;
  }

  public async getById(id: number): Promise<IRestaurant> {
    const [[restaurant]] = await this.connection.execute<IRestaurant[] & RowDataPacket[]>(
      'SELECT * FROM Restaurants WHERE id=?',
      [id],
    );
    return restaurant;
  }

  public async create(newRestaurant: IRestaurant): Promise<void> {
    const { name, category, openingTime, closingTime } = newRestaurant;
    await this.connection.execute(
      'INSERT INTO Restaurants (name, category, openingTime, closingTime) VALUES (?, ?, ?, ?)',
      [name, category, openingTime, closingTime],
    );
  }

  public async update(newRestaurant: IRestaurant, id: number): Promise<void> {
    const { name, category, openingTime, closingTime } = newRestaurant;
    await this.connection.execute(
      `UPDATE Restaurants 
       SET name=?, category=?, openingTime=?, closingTime=?
       WHERE id=?`,
      [name, category, openingTime, closingTime, id],
    );
  }

  public async destroy(id: number): Promise<void> {
    await this.connection.execute('DELETE FROM Restaurants WHERE id=?', [id]);
  }

  public async getOpenRestaurants(): Promise<IRestaurant[]> {
    const [restaurants] = await this.connection.execute<IRestaurant[] & RowDataPacket[]>(
      'SELECT * FROM Restaurants WHERE openingTime <= TIME(NOW()) AND closingTime > TIME(NOW())',
    );
    return restaurants;
  }
}