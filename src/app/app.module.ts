import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Components
import { AppComponent } from './app.component';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';

// PrimeNG Modules
import {MegaMenuModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MegaMenuComponent
  ],
  imports: [
    BrowserModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
