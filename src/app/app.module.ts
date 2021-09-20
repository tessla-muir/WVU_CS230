import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { SideNavBarComponent } from './header/side-nav-bar.component';
import { CarouselComponent } from './main/carousel.component';
import { LiveSteamCards } from './main/livestream-cards.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { LayoutHomeComponent } from './layout/home_layout/layout-home.component';
import { LivestreamPageComponent } from './body/livestream_page/livestream-page.component';
import { FollowingPageComponent } from './body/following_page/following-page.componet';
import { BrowsePageComponent } from './body/browse_page/browse-page.component';
import { AppRoutingModule } from './app-routing.module';
import { StreamerPageComponent } from './body/streamer_page/streamer-page.component';
import { GamePageComponent } from './body/game_page/game-page.componet';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    CarouselComponent,
    LiveSteamCards,
    LayoutMainComponent,
    LayoutHomeComponent,
    StreamerPageComponent,
    LivestreamPageComponent,
    GamePageComponent,
    FollowingPageComponent,
    BrowsePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
