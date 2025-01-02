import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], dicertion: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (dicertion === 'asc') {
        return a > b ? 1 : -1;
      }
      return a < b ? 1 : -1;
    });
    return sorted;
  }

}
