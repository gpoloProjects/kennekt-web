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
  }




  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
