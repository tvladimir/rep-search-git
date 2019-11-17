import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksListComponent } from './pages/bookmarks-list/bookmarks-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookmarksRoutingModule } from './bookmarks-routing.module';



@NgModule({
  declarations: [BookmarksListComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule { }
