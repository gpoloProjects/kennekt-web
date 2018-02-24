import { MenuItem } from './../../interfaces/menu-item';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../../interfaces/menu';
import {RatingModule} from 'primeng/rating';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  favoritePrev = 0 ;
  val = 5;

  @Input() menuItem: MenuItem;
  mockMenu: Menu;

  constructor() { }

  ngOnInit() {
    // console.log('menu item is: ' , this.menuItem);
  }


  public toggleFavorite(event){
    console.log('event from favorite toggled ', event);
    console.log('value of favorite is: ', event.value);


  }
}
