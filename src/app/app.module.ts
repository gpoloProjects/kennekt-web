import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Components
import { AppComponent } from './app.component';

// PrimeNG Modules
import {MenubarModule,MenuItem} from 'primeng/primeng';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
    MenuHeaderComponent,
    MenuFooterComponent,
    MenuCategoryComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
