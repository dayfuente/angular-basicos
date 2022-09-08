import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    // las declaraciones dicen que cosas tiene este modulo componentes Pipes..
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    // Que cosas quiero que sean públicas o visibles afuera de este módulo:
    exports:[
        ListadoComponent
    ],
    // Aquí van usualmente sólo módulos
    imports:[
        CommonModule 
    ]
})
export class HeroesModule {}