import { Component, OnInit } from '@angular/core';
import {MenubarModule,MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[];


  constructor() { }

  ngOnInit() {
      this.items = [
          {
              label: 'QR Code',
              icon: 'fa-qrcode',
              items: [
                  {label: 'QR code --> Image'},
                  {label: 'Image --> QR Code'}
              ]
          },
          {
              label: 'Edit',
              icon: 'fa-edit',
              items: [
                  {label: 'Undo', icon: 'fa-mail-forward'},
                  {label: 'Redo', icon: 'fa-mail-reply'}
              ]
          }
      ];
  }

}
