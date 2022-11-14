import { Pool, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  constructor(private connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Products ORDER BY price ASC',
    );
    return products;
  }

  public async getById(id: number): Promise<IProduct> {
    const [[product]] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Products WHERE id=?',
      [id],
    );
    return product;
  }

  public async create(newProduct: IProduct): Promise<void> {
    const { name, brand, price, 
      manufacturing_date: manufacturingDate, expiration_date: expirationDate } = newProduct;
    await this.connection.execute(
      `INSERT INTO Products (name, brand, price, manufacturing_date, expiration_date)
       VALUES (?, ?, ?, ?, ?)`,
       [name, brand, price, manufacturingDate, expirationDate],
    );
  }

  public async update(id: number, newProduct: IProduct): Promise<void> {
    const { name, brand, price, 
      manufacturing_date: manufacturingDate, expiration_date: expirationDate } = newProduct;
    await this.connection.execute(
      `UPDATE Products 
       SET name=?, brand=?, price=?, manufacturing_date=?, expiration_date=?
       WHERE id=?`,
       [name, brand, price, manufacturingDate, expirationDate, id],
    );
  }

  public async destroy(id: number): Promise<void> {
    await this.connection.execute('DELETE FROM Products WHERE id=?', [id]);
  }

  public async getByPriceRange(minPrice: number, maxPrice: number): Promise<IProduct[]> {
    const [products] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Products WHERE price BETWEEN ? AND ?',
      [minPrice, maxPrice],
    );
    return products;
  }

  public async getByValidDate(): Promise<IProduct[]> {
    const now = new Date();
    const [products] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Products WHERE expiration_date > ?',
      [now],
    );
    return products;
  }
}