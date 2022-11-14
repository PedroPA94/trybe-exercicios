import { Request, Response } from 'express';
import ProductService from '../services/Products.service';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  getbyId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await this.productService.getbyId(Number(id));
    res.status(200).json(product);
  };

  create = async (req: Request, res: Response) => {
    const newProduct = req.body;
    await this.productService.create(newProduct);
    res.status(201).json({ message: 'Product created' });
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newProduct = req.body;
    await this.productService.update(newProduct, Number(id));
    res.status(201).json({ message: 'Product updated' });
  };

  destroy = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.productService.destroy(Number(id));
    res.status(204).end();
  };

  getByPriceRange = async (req: Request, res: Response) => {
    const { min: minPrice, max: maxPrice } = req.query;
    const products = await this.productService.getByPriceRange(Number(minPrice), Number(maxPrice));
    res.status(200).json(products);
  };

  getByValidDate = async (_req: Request, res: Response) => {
    const products = await this.productService.getByValidDate();
    res.status(200).json(products);
  };
}