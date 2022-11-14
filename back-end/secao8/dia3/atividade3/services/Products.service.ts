import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/Product.model';
import { validateNewProduct, validatePriceQueryParams } from '../validations/validateInputs';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    return this.productModel.getAll();
  }

  public async getbyId(id: number): Promise<IProduct> {
    return this.productModel.getById(id);
  }

  public async create(newProduct: IProduct): Promise<void> {
    validateNewProduct(newProduct);
    await this.productModel.create(newProduct);
  }

  public async update(newProduct: IProduct, id:number): Promise<void> {
    validateNewProduct(newProduct);
    await this.productModel.update(id, newProduct);
  }

  public async destroy(id: number): Promise<void> {
    await this.productModel.destroy(id);
  }

  public async getByPriceRange(minPrice: number, maxPrice: number): Promise<IProduct[]> {
    validatePriceQueryParams(minPrice, maxPrice);
    return this.productModel.getByPriceRange(minPrice, maxPrice);
  }

  public async getByValidDate(): Promise<IProduct[]> {
    return this.productModel.getByValidDate();
  }
}