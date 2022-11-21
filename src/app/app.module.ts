import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';
import { FilterPipe } from './filter.pipe';
import { CommentComponent } from './comment/comment.component';
import { CommentFilterPipe } from './comment-filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { CommentIfDirective } from './comment-if.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TextComponent,
    FilterPipe,
    CommentComponent,
    CommentFilterPipe,
    HighlightDirective,
    CommentIfDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
