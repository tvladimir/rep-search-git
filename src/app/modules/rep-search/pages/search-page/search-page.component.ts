import { Component, OnInit } from '@angular/core';
import { BookmarkDataModel } from 'src/app/modules/shared/models/BookmarkData.model';
import { Subject, Observable } from 'rxjs';
import { LoaderService } from 'src/app/modules/shared/services/loader/loader.service';
import { DataService } from 'src/app/modules/shared/services/data/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  // public searchList$: Observable<Array<BookmarkDataModel>>;
  public searchList: BookmarkDataModel[] = [];
  public searchInput: string;
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private loaderService: LoaderService,
    private dataService: DataService
  ) {
  }

  ngOnInit() {

  }

  addNewBookmark(bookmark: BookmarkDataModel) {
    console.log(bookmark);
  }

  searchFromGit() {
    this.searchList = [];
    this.dataService.serachFromGit(this.searchInput).subscribe(data => {
      this.searchList = data.items.map((item: any) => {
          return  {
            Name : `${item.name} : ${item.full_name}`,
            AvatarUrl : item.owner.avatar_url,
            Url : item.html_url
          } as BookmarkDataModel;
    });
  });
}

}
