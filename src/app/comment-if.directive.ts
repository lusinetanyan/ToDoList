import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCommentIf]'
})
export class CommentIfDirective {

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef) { }


  @Input() set appCommentIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!condition) {
      this.viewContainer.clear();
    }
  }
}
