import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Components
import { AppComponent } from './app.component';

// PrimeNG Modules
import {MenubarModule,MenuItem} from 'primeng/primeng';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
