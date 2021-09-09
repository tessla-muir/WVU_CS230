import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { SideNavBarComponent } from './header/side-nav-bar.component';
import { CarouselComponent } from './main/carousel.component';
import { LiveSteamCards } from './main/livestream-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    CarouselComponent,
    LiveSteamCards
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
