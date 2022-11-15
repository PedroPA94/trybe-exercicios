import { IRestaurant } from '../interfaces';
import connection from '../models/connection';
import RestaurantModel from '../models/Restaurant.model';
import validateNewRestaurant from '../validations/validateInputs';

export default class RestaurantService {
  private restaurantModel: RestaurantModel;

  constructor() {
    this.restaurantModel = new RestaurantModel(connection);
  }

  public async getAll(): Promise<IRestaurant[]> {
    return this.restaurantModel.getAll();
  }

  public async getById(id: number): Promise<IRestaurant> {
    return this.restaurantModel.getById(id);
  }

  public async create(newRestaurant: IRestaurant): Promise<void> {
    validateNewRestaurant(newRestaurant);
    await this.restaurantModel.create(newRestaurant);
  }

  public async update(newRestaurant: IRestaurant, id: number): Promise<void> {
    validateNewRestaurant(newRestaurant);
    await this.restaurantModel.update(newRestaurant, id);
  }

  public async destroy(id: number): Promise<void> {
    await this.restaurantModel.destroy(id);
  }

  public async getOpenRestaurants(): Promise<IRestaurant[]> {
    return this.restaurantModel.getOpenRestaurants();
  }
}