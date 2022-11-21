import {Component, Input} from '@angular/core';
import {BindingService} from "../binding.service";


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

  public count : number = 0;
  input: string[] = BindingService.input;
  checked: boolean[] = BindingService.checked;
  comments: string[][] = BindingService.comments;
  commentsOn: boolean[] = BindingService.commentsOn;
  @Input() clicked : boolean = false;

  constructor() { }

  checkboxCount(checked: boolean, index: number) : void {
    if(checked) this.count++;
    else this.count--;
    this.checked[index] = checked;
  }

  onLabelClick(index: number) {
    this.commentsOn[index] = !this.commentsOn[index];
    BindingService.commentsOn = this.commentsOn;
  }

  delete(index: number) {
    let newInput: string[] = [];
    let newComments: string[][] = [];
    let newCommentsOn: boolean[] = [];
    let i: number = 0;
    for(let task of this.input) {
      if(i == index) {
        i++;
        continue;
      }
      newInput.push(task);
      i++;
    }
    i = 0;
    for(let comments of this.comments) {
      if(i == index) {
        i++;
        continue;
      }
      newComments.push(comments);
      i++;
    }
    i = 0;
    for(let commentOn of this.commentsOn) {
      if(i == index) {
        i++;
        continue;
      }
      newCommentsOn.push(commentOn);
      i++;
    }
    this.input = newInput;
    this.comments = newComments;
    this.commentsOn = newCommentsOn;
    BindingService.input = this.input;
    BindingService.comments = this.comments;
    BindingService.commentsOn = this.commentsOn;
    this.count--;
  }
}
