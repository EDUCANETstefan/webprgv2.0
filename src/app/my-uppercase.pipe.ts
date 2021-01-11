import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: string, limit: number, dots: string): string {

    const fullLenght = value.length + dots.length;

    if(value.length < limit) return value;
      else if(dots.length >= limit) return dots.substring(0, limit);
        else if(fullLenght > limit) return value.substring(0, limit - dots.length) + dots;
  }

}
