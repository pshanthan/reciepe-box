import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepTimePipe'
})
export class PrepTimePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
