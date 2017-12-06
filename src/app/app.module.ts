import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Components
import { AppComponent } from './app.component';

// PrimeNG Modules
import {MegaMenuModule} from 'primeng/primeng';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import {MenubarModule,MenuItem} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
