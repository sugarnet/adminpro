import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginGuard,
         SettingsService,
         SharedService,
         SidebarService,
         SubirArchivoService,
         UsuarioService,
         HospitalService,
         MedicoService
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuard,
    SettingsService,
    SharedService,
    SidebarService,
    SubirArchivoService,
    UsuarioService,
    HospitalService,
    MedicoService
  ]
})
export class ServiceModule { }
