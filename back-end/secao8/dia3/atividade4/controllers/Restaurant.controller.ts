import { Request, Response } from 'express';
import RestaurantService from '../services/Restaurant.service';

export default class RestaurantController {
  private restaurantService: RestaurantService;

  constructor() {
    this.restaurantService = new RestaurantService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const restaurants = await this.restaurantService.getAll();
    res.status(200).json(restaurants);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const restaurant = await this.restaurantService.getById(Number(id));
    res.status(200).json(restaurant);
  };

  public create = async (req: Request, res: Response) => {
    const newRestaurant = req.body;
    await this.restaurantService.create(newRestaurant);
    res.status(201).json({ message: 'Restaurante criado!' });
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newRestaurant = req.body;
    await this.restaurantService.update(newRestaurant, Number(id));
    res.status(201).json({ message: 'Restaurante atualizado!' });
  };

  public destroy = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.restaurantService.destroy(Number(id));
    res.status(204).end();
  };

  public getOpenRestaurants = async (_req: Request, res: Response) => {
    const restaurants = await this.restaurantService.getOpenRestaurants();
    res.status(200).json(restaurants);
  };
}