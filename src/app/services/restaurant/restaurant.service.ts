import { Injectable } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';
import { Menu } from '../../interfaces/menu';

@Injectable()
export class RestaurantService {
  private restaurant: Restaurant;

  constructor() { }

  public setRestaurant(restaurant: Restaurant){
    this.restaurant = restaurant;
  }

  public getRestaurant(): Restaurant{
    return this.restaurant;
  }

  public getMenu(menu: string): Menu{
    if(this.restaurant === null || menu === null || menu.length <= 0){
      return null;
    }
    return this.restaurant.mapMenu.get(menu);
  }
}
