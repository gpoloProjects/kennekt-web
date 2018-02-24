import { MenuItem } from './../../interfaces/menu-item';
import { Injectable } from '@angular/core';
import { Menu } from '../../interfaces/menu';

@Injectable()
export class MenuService {
  private menu: Menu;

  constructor() { }

  public setMenu(menu: Menu){
    this.menu = menu;
    this.setMenuItems(this.menu.categories);
  }

  public getMenu(): Menu{
    return this.menu;
  }

  private setMenuItems(categories: string[]){
    if(categories != null && categories.length > 0){
      this.menu.mapMenuItem = new Map<string, MenuItem[]>();
      const length = categories.length;
      for(let i = 0; i < length; i++){
        this.menu.mapMenuItem.set(categories[i], this.menu[categories[i]]);
      }
    }
  }
}
