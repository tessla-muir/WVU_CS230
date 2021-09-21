import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBar_MoreDropdownComponent } from './header/top_nav_components/more-dropdown.component';
import { TopNavBar_BitDropdownComponent } from './header/top_nav_components/bit-dropdown.component';
import { SideNavBarComponent } from './header/side-nav-bar.component';
import { CarouselComponent } from './main/carousel.component';
import { LiveSteamCards } from './main/livestream-cards.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { LayoutHomeComponent } from './layout/home_layout/layout-home.component';
import { LivestreamPageComponent } from './body/livestream_page/livestream-page.component';
import { LivestreamPage_StreamSectionComponent } from './body/livestream_page/stream-section.component';
import { FollowingPageComponent } from './body/following_page/following-page.componet';
import { FollowingPage_OverviewComponent } from './body/following_page/following_routes/following-overview.component';
import { BrowsePageComponent } from './body/browse_page/browse-page.component';
import { AppRoutingModule } from './app-routing.module';
import { StreamerPageComponent } from './body/streamer_page/streamer-page.component';
import { GamePageComponent } from './body/game_page/game-page.componet';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBar_MoreDropdownComponent,
    TopNavBar_BitDropdownComponent,
    SideNavBarComponent,
    CarouselComponent,
    LiveSteamCards,
    LayoutMainComponent,
    LayoutHomeComponent,
    StreamerPageComponent,
    LivestreamPageComponent,
    LivestreamPage_StreamSectionComponent,
    GamePageComponent,
    FollowingPageComponent,
    FollowingPage_OverviewComponent,
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
