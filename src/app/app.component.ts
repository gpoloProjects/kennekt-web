import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'knnk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    this.title = "HELLO";
  }


}
