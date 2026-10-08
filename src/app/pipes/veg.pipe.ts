import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'veg'
})
export class VegPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
