import { Pipe, PipeTransform } from '@angular/core';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string,): unknown {
    // (83)9999-8888
    if (value.length == 10) {
      return '(' + value.substring(0, 2) + ')' +' '+ + value.substring(2, 6) + '-' + value.substring(6, 10)
    }
    //9999-8888
    if (value.length == 8) {
      return value.substring(0, 4) + '-' + value.substring(4, 8)
    }
    /// (083) 9.999-8888
    if (value.length == 11) {
      return '(' + value.substring(0, 3) + ')' +' '+ value.substring(3, 7) + '-' + value.substring(6, 10)
    }
    return value;
  }

}
