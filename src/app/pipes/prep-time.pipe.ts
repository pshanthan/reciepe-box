import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepTime',
})
export class PrepTimePipe implements PipeTransform {
  transform(value: number): string {
    return `${value} minutes`;
  }
}
