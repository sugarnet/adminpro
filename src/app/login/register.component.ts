import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function initPlugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor( private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit() {
    initPlugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, {validators: this.sonIguales('password1', 'password2')});

    this.forma.setValue({
      nombre: 'Test 1',
      correo: 'test1@gmail.com',
      password1: '123456',
      password2: '123456',
      condiciones: false
    });
  }

  sonIguales(campo1: string, campo2: string) {

    return (group: FormGroup) => {

      const field1 = group.controls[campo1].value;
      const field2 = group.controls[campo2].value;

      if (field1 === field2) {
        return null;
      }

      return {
        sonIguales: true
      }
    }
  }

  registrarUsuario() {

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      Swal.fire("Importante", "Debe aceptar las condiciones", "warning");
      return;
    }

    let usuario = new Usuario(this.forma.value.nombre, this.forma.value.correo, this.forma.value.password1);

    this.usuarioService.crearUsuario(usuario).subscribe((data: any) => {
      console.log(data);
      Swal.fire({
        title: 'Usuario creado!',
        text: data.email,
        type: 'success',
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['login']);
        }
      })
    }, error => Swal.fire(error.error.message, error.error.errors.message, 'error'));
  }

}
