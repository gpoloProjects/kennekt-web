import { MockDataService } from './../../services/mock-data.service';
import { MenuItem } from './../../interfaces/menu-item';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../../interfaces/menu';
// import * as mockMenu from "../../../../mock-api/mock-data/menu.json";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  mockMenu: Menu;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() { 
    // this.getJson();
   }

  // private getJson(){
  //   // this.mockDataService.getMenu().subscribe(data  => this.mockMenu =  { ...data   });  // works but can't do anything in it
  //   this.mockDataService.getMenu().subscribe(data  =>   {    
  //      this.mockMenu = data;
  //     console.log(this.mockMenu);
  //     // console.log(this.mockMenu.createdBy);
  //   });
  // }


}