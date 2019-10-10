import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { PipesModule } from '../pipes/pipes.module';

import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';

@NgModule({
    declarations: [
        GraficoDonaComponent,
        IncrementadorComponent,
        ModalUploadComponent
    ],
    exports: [
        IncrementadorComponent,
        GraficoDonaComponent,
        ModalUploadComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class ComponentsModule {}