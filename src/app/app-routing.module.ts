import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from './layout/home_layout/layout-home.component';
import { BrowsePageComponent } from './body/browse_page/browse-page.component';
import { BrowsePage_CategoriesComponent } from './body/browse_page/browse_routes/browse-categories.component';
import { BrowsePage_LiveChannelsComponent } from './body/browse_page/browse_routes/browse-livechannels.component';
import { FollowingPageComponent } from './body/following_page/following-page.componet';
import { FollowingPage_OverviewComponent } from './body/following_page/following_routes/following-overview.component';
import { FollowingPage_LiveComponent } from './body/following_page/following_routes/following-live.component';
import { GamePageComponent } from './body/game_page/game-page.componet';
import { LivestreamPageComponent } from './body/livestream_page/livestream-page.component';
import { StreamerPageComponent } from './body/streamer_page/streamer-page.component';
import { AddCategoryComponent } from './body/browse_page/browse_routes/add-category.component';
import { AuthComponent } from './auth/auth.componnet';




const routes: Routes = [
  { path: '', component:  LayoutHomeComponent},
  { path: 'browse', component: BrowsePageComponent,
    children: [{path:'categories', component: BrowsePage_CategoriesComponent},
               {path:'livechannels', component: BrowsePage_LiveChannelsComponent},
               {path:'add_category', component: AddCategoryComponent}]},
  { path: 'following', component: FollowingPageComponent,
    children: [{path:'overview', component: FollowingPage_OverviewComponent},
               {path: 'live', component: FollowingPage_LiveComponent}]},
  { path: 'livestream', component: LivestreamPageComponent},
  { path: 'streamer', component: StreamerPageComponent},
  { path: 'game', component: GamePageComponent},
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }