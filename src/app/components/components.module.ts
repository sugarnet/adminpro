import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';

@NgModule({
    declarations: [
        GraficoDonaComponent,
        IncrementadorComponent
    ],
    exports: [
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        FormsModule,
        ChartsModule
    ]
})
export class ComponentsModule {}