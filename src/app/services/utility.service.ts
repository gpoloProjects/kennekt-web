import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { Restaurant } from '../interfaces/restaurant';

@Injectable()
export class UtilityService {

  constructor() { }

  public getMenuFromRest(restaurant: Restaurant, menu: string): Menu{
    if(restaurant === null || menu === null || menu.length <= 0){
      return null;
    }
     const menuObj: Menu = restaurant.mapMenu.get(menu);

    return menuObj;
  }
}
