import { Pipe, PipeTransform } from '@angular/core';
import { Library } from '@angularis/core';

@Pipe({
  name: 'pad',
})
export class PadPipe implements PipeTransform {
  transform(value: string | number, power: number): string | number {
    
    if (Library.isStringWithLength(value) || Library.isNumber(value)) {
      const val = parseInt(value.toString(), 10);
      return Library.pad(val, power);
    }

    return value;
  }
}
