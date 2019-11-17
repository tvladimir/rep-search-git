import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksListComponent } from './pages/bookmarks-list/bookmarks-list.component';


const routes: Routes = [
  {path: '', component: BookmarksListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
