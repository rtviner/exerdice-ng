import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'range'})

export class RangePipe implements PipeTransform {
  transform(value: number) {
    if (!value) return null;
    let range = [];
    for (let i = 0; i < value; i++) {
      range.push(i + 1);
    }
    return range;
  }
}