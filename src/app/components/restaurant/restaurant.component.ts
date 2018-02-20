import { Menu } from './../../interfaces/menu';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';
import { Subject } from 'rxjs/Subject';
import { MockDataService } from '../../services/mock-data.service';
import { UtilityService } from '../../services/utility.service';
import { MenuService } from '../../services/menu/menu.service';
import { RestaurantService } from '../../services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit, OnDestroy {

  private mockRestaurant: Restaurant;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private mockDataService: MockDataService,
    private utilityService: UtilityService,
    private menuService: MenuService,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.getJson();
  }

  private getJson(){
    this.mockDataService.getRestaurant().takeUntil(this.unsubscribe).subscribe(data => {
      this.mockRestaurant = data;
      console.log('restaurant object received from get', this.mockRestaurant);
      this.mockRestaurant.mapMenu = new Map<string, Menu>();
      if(this.mockRestaurant.menus != null && this.mockRestaurant.menus.length > 0 ){
        for(let i = 0; i < this.mockRestaurant.menus.length; i++){
          this.mockRestaurant.mapMenu.set(this.mockRestaurant.menus[i], this.mockRestaurant[this.mockRestaurant.menus[i]]);
        }
      }
      this.restaurantService.setRestaurant(this.mockRestaurant);
      console.log(this.mockRestaurant.mapMenu);
    });
  }

  public getMenuImage(menu: string): string{
    return this.restaurantService.getMenu(menu).headerImage;
  }

  public setMenu(menu: string){
    console.log('menu set: ' + menu);
    this.menuService.setMenu(this.restaurantService.getMenu(menu));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
