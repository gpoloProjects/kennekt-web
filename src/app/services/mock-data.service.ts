import { Menu } from './../interfaces/menu';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockDataService {

  private menuUrl = 'assets/mock-api/mock-data/menu.json';
  constructor(private http: HttpClient) { }

  getMenu(): Observable<any>{
      return this.http.get<Menu>(this.menuUrl);
  }
}
