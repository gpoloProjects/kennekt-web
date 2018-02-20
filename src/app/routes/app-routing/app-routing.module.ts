import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from '../../components/restaurant/restaurant.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { HomeComponent } from '../../components/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'menu', component: MenuComponent },
  { path: '', pathMatch: 'full', redirectTo: 'restaurant'},
  { path: '**', pathMatch: 'full', redirectTo: 'restaurant'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
