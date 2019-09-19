import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  usuario: Usuario;

  constructor( private http: HttpClient, private router: Router ) {
    this.cargarStorage();
  }

  crearUsuario( usuario: Usuario ) {
    const url = `${ URL_SERVICIOS }/usuario`;
    return this.http.post(url, usuario).pipe(map( (data: any) => {
      return data.usuario;
    } ));
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(usuario));

      this.usuario = usuario;
      this.token = token;
  }

  login( usuario: Usuario, recuerdame = false ) {
    const url = `${ URL_SERVICIOS }/login`;

    if ( recuerdame ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email')
    }
    
    return this.http.post(url, usuario).pipe(map( (response: any) => {
      this.guardarStorage(response.id, response.token, response.usuario);

      return true;
    } ));
  }

  loginGoogle(token: string) {
    const url = `${ URL_SERVICIOS }/login/google`;
    return this.http.post(url, { token }).pipe( map( (response: any) => {
      this.guardarStorage(response.id, response.token, response.usuario);
      return true;
    } ) );
  }

  logout() {
    this.token = '';
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['login']);
  }

  estaLogueado() {
    return this.token.length > 5 ? true : false;
  }
}
