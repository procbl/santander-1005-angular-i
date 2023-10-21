import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'cepMask',
})
export class cepMaskPipe implements PipeTransform {
    transform(value: any): string {
        let cepFormatado = value+''
        return cepFormatado.replace(/(\d{2})(\d{3})(\d{3})/, '$1$2-$3') 
    }
}