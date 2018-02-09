import { MenuItem } from './../../interfaces/menu-item';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Menu } from './../../interfaces/menu';
import { MockDataService } from '../../services/mock-data.service';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/takeUntil";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  mockMenu: Menu;

  private unsubscribe: Subject<void> = new Subject();

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.getJson();
  }

  private getJson(){
    this.mockDataService.getMenu().takeUntil(this.unsubscribe).subscribe(data  =>   {    
       this.mockMenu = data;
       this.mockMenu.mapMenuItem = new Map<string, MenuItem[]>();
      //  console.log(data['lunch']);
      // custom add menu items into hashmap

      // populate the hashmap with the keys we know exist
       this.mockMenu.mapMenuItem.set('lunch', data['lunch']);
       this.mockMenu.mapMenuItem.set('dinner', data['dinner']);
      // TODO: create a category array in Menu interface which will say to explicityly look for these
      // Key values in the JSON, which will also be the key to the hashmap.

      // console.log(this.mockMenu);
      // console.log('size of menu map', this.mockMenu.mapMenuItem.size);
    });
  }

  

  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
