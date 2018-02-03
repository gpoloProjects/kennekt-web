import { MenuItem } from './../../interfaces/menu-item';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import * as mockMenu from "../../../../mock-api/mock-data/menu.json";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  constructor(private http: HttpClientModule) { }

  ngOnInit() { 
    this.getJson();
   }

  private getJson(): Observable<any>{
    // console.log(mockMenu.lunch);

    let mockMenu = '../../../../mock-api/mock-data/menu.json';
    return this.http.get
  }
}
