import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menus: any = [];

  constructor( private sidebarService: SidebarService, private usuarioService: UsuarioService ) {
    this.menus = sidebarService.menu;
  }

  ngOnInit() {
  }

  logout() {
    this.usuarioService.logout();
  }

}
