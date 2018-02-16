import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../interfaces/restaurant';

@Injectable()
export class MockDataService {

  // private menuUrl = 'assets/mock-api/mock-data/menu.json';
  private menuUrl = 'assets/mock-api/mock-data/restaurant.json';
  constructor(private http: HttpClient) { }

  getRestaurant(): Observable<any>{
      return this.http.get<Restaurant>(this.menuUrl);
  }
}
