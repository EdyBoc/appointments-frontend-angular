import { Routes } from '@angular/router';
import { ListarCitasComponent } from './citas/listar-citas/listar-citas.component';
import { DetalleCitaComponent } from './citas/detalle-cita/detalle-cita.component';

export const routes: Routes = [
  { path: '', component: ListarCitasComponent },
  { path: 'detalle/:id', component: DetalleCitaComponent }
];


