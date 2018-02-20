import { Injectable } from '@angular/core';
import { Menu } from '../../interfaces/menu';

@Injectable()
export class MenuService {
  private menu: Menu;

  constructor() { }

  public setMenu(menu: Menu){
    this.menu = menu;
  }

  public getMenu(): Menu{
    return this.menu;
  }

}
