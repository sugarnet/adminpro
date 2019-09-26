import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo = 'usuarios'): any {

    let url = `${ URL_SERVICIOS }/imagenes`;

    if ( !img ) {
      url += '/usuarios/???'
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch(tipo) {
      case 'usuarios':
      case 'medicos':
      case 'hospitales':
        url += `/${ tipo }/${ img }`;
        break;
      default:
        console.log("Tipo de imagen no existe");
        url += `/usuarios/???`;
      break;
    }

    return url;
  }

}
