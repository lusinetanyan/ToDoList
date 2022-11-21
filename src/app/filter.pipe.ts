import { Pipe, PipeTransform } from '@angular/core';
import {stringifyTask} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], checked: boolean[], clicked: boolean): string[] {
    if(clicked) {
      let result: string[] = [];
      for (let i = 0; i < value.length; i++) {
        if (checked[i])
          result.push(value[i]);
      }
      return result;
    }
    else return value;
  }
}
