import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'veg',
})
export class VegPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value === true) {
      return 'veg';
    } else {
      return 'non-veg';
    }
  }
}
