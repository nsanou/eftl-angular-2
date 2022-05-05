import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'tva'
})
export class TvaPipe implements PipeTransform {

  transform(value: number, taux: number = 0): unknown {
    console.info(value, taux);
    return Math.round(value * (100 + taux)) / 100;
  }

}
