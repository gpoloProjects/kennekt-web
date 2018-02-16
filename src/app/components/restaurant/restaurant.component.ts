import { Component, OnInit, OnDestroy } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';
import { Subject } from 'rxjs/Subject';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit, OnDestroy {

  private mockRestaurant: Restaurant;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.getJson();
  }

  private getJson(){
    this.mockDataService.getRestaurant().takeUntil(this.unsubscribe).subscribe(data => {
      this.mockRestaurant = data;
      console.log(this.mockRestaurant);

      //  console.log(data['lunch']);
      // custom add menu items into hashmap

      // populate the hashmap with the keys we know exist
      // this.mockMenu.mapMenuItem.set('lunch', data['lunch']);
      // this.mockMenu.mapMenuItem.set('dinner', data['dinner']);
     // TODO: create a category array in Menu interface which will say to explicityly look for these
     // Key values in the JSON, which will also be the key to the hashmap.

     // console.log(this.mockMenu);
     // console.log('size of menu map', this.mockMenu.mapMenuItem.size);
    });
  }

  ngOnDestroy() {

  }

}
