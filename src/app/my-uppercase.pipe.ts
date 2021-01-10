import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string): string {
    const dots = "...";
    const limit = 3;
    if(value.length > limit) return value.substring(0, limit) + dots;
      else return value;
  }

}
