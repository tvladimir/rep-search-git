import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatTabsModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultLoaderComponent } from './components/default-loader/default-loader.component';
import { LoaderService } from './services/loader/loader.service';
import { AddBookmarkDirective } from './directives/add-bookmark/add-bookmark.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,

  ],
  declarations: [
    DefaultLoaderComponent,
    AddBookmarkDirective
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    DefaultLoaderComponent,
    AddBookmarkDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoaderService
      ]
    };
  }
}
