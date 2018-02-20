import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { Menu } from '../../interfaces/menu';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {

  @Input() category: string;
  @Input() menuItems: MenuItem[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    console.log('got menu items now', this.menuItems);
  }

}
