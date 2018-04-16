import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JumpToComponent } from './jumpTo/jumpTo.component';
import { ViewCommentsComponent } from './viewComments/viewComments.component';
import { AddCommentComponent } from './addComment/addComment.component';

@NgModule({
  declarations: [
    AppComponent,
    JumpToComponent,
    ViewCommentsComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
