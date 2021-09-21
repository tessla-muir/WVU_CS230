import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from './layout/home_layout/layout-home.component';
import { BrowsePageComponent } from './body/browse_page/browse-page.component';
import { FollowingPageComponent } from './body/following_page/following-page.componet';
import { FollowingPage_OverviewComponent } from './body/following_page/following_routes/following-overview.component';
import { FollowingPage_LiveComponent } from './body/following_page/following_routes/following-live.component';
import { GamePageComponent } from './body/game_page/game-page.componet';
import { LivestreamPageComponent } from './body/livestream_page/livestream-page.component';
import { StreamerPageComponent } from './body/streamer_page/streamer-page.component';


const routes: Routes = [
  { path: '', component:  LayoutHomeComponent},
  { path: 'browse', component: BrowsePageComponent},
  { path: 'following', component: FollowingPageComponent,
    children: [{path:'overview', component: FollowingPage_OverviewComponent},
              {path: 'live', component: FollowingPage_LiveComponent}]},
  { path: 'livestream', component: LivestreamPageComponent},
  { path: 'streamer', component: StreamerPageComponent},
  { path: 'game', component: GamePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }