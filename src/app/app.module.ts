// Angular Components
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// PrimeNG Modules
import {MenubarModule} from 'primeng/primeng';

// Components
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantChainComponent } from './components/restaurant-chain/restaurant-chain.component';

// Services
import { MockDataService } from './services/mock-data.service';
import { UtilityService } from './services/utility.service';
import { RestaurantService } from './services/restaurant/restaurant.service';
import { MenuService } from './services/menu/menu.service';
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
    MenuHeaderComponent,
    MenuFooterComponent,
    MenuCategoryComponent,
    RestaurantComponent,
    RestaurantChainComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MockDataService,
    UtilityService,
    RestaurantService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
