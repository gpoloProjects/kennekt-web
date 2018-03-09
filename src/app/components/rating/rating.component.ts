import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating ;
  // TODO: have average rating from total ratings from database call

  public ratingMax = 5;
  // populate collection to iterate over in template
  public ratingsFilled = new Array();
  public ratingsUnfilled = new Array();

  constructor() { }

  ngOnInit() {
    // this.ratingsFilled;
    for(let i = 0; i < this.rating; i++){
      this.ratingsFilled.push(i);
    }

    for(let j = 0; j < this.ratingMax - this.rating; j++){
      this.ratingsUnfilled.push(j);
    }


    console.log('rating is: ' + this.rating);
    console.log('ratingsFilled array: ' + this.ratingsFilled.length);
  }

}
