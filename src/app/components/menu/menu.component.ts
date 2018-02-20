import { MenuItem } from './../../interfaces/menu-item';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Menu } from './../../interfaces/menu';
import { MockDataService } from '../../services/mock-data.service';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/takeUntil";
import { MenuService } from '../../services/menu/menu.service';
import { Routes } from '../../enums/routes.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  menu: Menu;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private mockDataService: MockDataService,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.menuService.getMenu()){
      this.menu = this.menuService.getMenu();
    }
    // redirect to restaurant page to choose a menu to get populated
    else{
      this.router.navigate([Routes.RESTAURANT]);
    }

    console.log('menu has: ', this.menu);
  }


  getMenuItems(category: string): MenuItem[]{
    if(this.menu.mapMenuItem === null){
      return null;
    }
    return this.menu.mapMenuItem.get(category);
  }


  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
