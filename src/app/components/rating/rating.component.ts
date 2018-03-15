import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number ;
  // TODO: have average rating from total ratings from database call

  public ratingMax = 5;
  // populate collection to iterate over in template
  public ratings = [0, 0, 0, 0, 0];

  constructor() { }

  ngOnInit() {
    // JUST IN CASE
    if(this.rating > this.ratingMax){
      this.rating = 5;
    }

    if(this.rating > 0){
      this.ratings.fill(1, 0, this.rating);
    }
    else{
      this.clearRatings();
    }
    console.log('ratings array: ', this.ratings);
  }

  private clearRatings(){
    // fill with 0s = no rating
    this.ratings.fill(0, 0, 5);
    this.rating = 0;
  }

  public clickedRating(index: number){
    const newRating = index + 1;
    if(this.rating !== newRating){
      this.ratings.fill(1, 0, newRating);
      this.ratings.fill(0, newRating, this.ratingMax);
      this.rating = newRating;
    }
    else{
      this.clearRatings();
    }
    console.log('index clicked: ' + index);
  }



}
