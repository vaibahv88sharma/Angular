import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uselessPipe'
})
export class UselessPipePipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }
  
/*   transform(value: any, args?: any): any {
    return null;
  } */

}
