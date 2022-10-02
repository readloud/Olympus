import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PlayItemComponent} from './play-item.component';

@NgModule({
  declarations: [
    PlayItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [PlayItemComponent]
})
export class PlayItemModule {
}
