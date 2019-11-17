import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from '../modules/rep-search/pages/search-page/search-page.component';


const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path: 'bookmarks', loadChildren: '../modules/bookmarks/bookmarks.module#BookmarksModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
