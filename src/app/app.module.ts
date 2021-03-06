import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBar_MoreDropdownComponent } from './header/top_nav_components/more-dropdown.component';
import { TopNavBar_BitDropdownComponent } from './header/top_nav_components/bit-dropdown.component';
import { SideNavBarComponent } from './header/side-nav-bar.component';
import { CarouselComponent } from './main/carousel.component';
import { LiveSteamCards } from './main/livestream-cards.component';
import { CategoryCardsComponent } from './main/category-cards.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { LayoutHomeComponent } from './layout/home_layout/layout-home.component';
import { StreamerPageComponent } from './body/streamer_page/streamer-page.component';
import { LivestreamPageComponent } from './body/livestream_page/livestream-page.component';
import { LivestreamPage_StreamSectionComponent } from './body/livestream_page/stream-section.component';
import { GamePageComponent } from './body/game_page/game-page.componet';
import { FollowingPageComponent } from './body/following_page/following-page.componet';
import { FollowingPage_OverviewComponent } from './body/following_page/following_routes/following-overview.component';
import { FollowingPage_LiveComponent } from './body/following_page/following_routes/following-live.component';
import { BrowsePageComponent } from './body/browse_page/browse-page.component';
import { BrowsePage_CategoriesComponent } from './body/browse_page/browse_routes/browse-categories.component';
import { BrowsePage_LiveChannelsComponent } from './body/browse_page/browse_routes/browse-livechannels.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { AddCategoryComponent } from './body/browse_page/browse_routes/add-category.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { initializeApp } from 'firebase/app';
import { AuthComponent } from './auth/auth.componnet';




@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBar_MoreDropdownComponent,
    TopNavBar_BitDropdownComponent,
    SideNavBarComponent,
    CarouselComponent,
    CategoryCardsComponent,
    AddCategoryComponent,
    LiveSteamCards,
    LayoutMainComponent,
    LayoutHomeComponent,
    StreamerPageComponent,
    LivestreamPageComponent,
    LivestreamPage_StreamSectionComponent,
    GamePageComponent,
    FollowingPageComponent,
    FollowingPage_OverviewComponent,
    FollowingPage_LiveComponent,
    BrowsePageComponent,
    BrowsePage_CategoriesComponent,
    BrowsePage_LiveChannelsComponent,
    UserInfoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-twitch'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


