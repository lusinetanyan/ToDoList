import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(value: string[], commentOn: boolean): string[] {
    if(commentOn) return value;
    else return [];
  }

}
