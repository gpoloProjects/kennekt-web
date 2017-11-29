import { Component, OnInit } from '@angular/core';

import {MegaMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'knnk-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: "QR Scanner",
        icon: "fa-qrcode",
        items: [
          [
            {
              label: "Converter",
              items: [
                {
                  label: "Image --> QR Code"
                },
                {
                  label: "QR Code --> Image"
                }
              ]
            }
          ]
        ]
      }
    ];
  }

}
