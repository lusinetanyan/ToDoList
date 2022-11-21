import {Component, Inject, Input, OnInit} from '@angular/core';
import {BindingService} from "../binding.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  public comments : string[] = [];
  @Input()
  public index : number = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickOnComment(current: HTMLTextAreaElement, comment: string) {
    this.comments.push(comment);
    BindingService.comments[this.index] = this.comments;
    current.value = '';
    // @ts-ignore
  }

}
