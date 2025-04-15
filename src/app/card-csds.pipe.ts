import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardCsds'
})
export class CardCsdsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
