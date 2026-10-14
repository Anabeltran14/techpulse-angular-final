import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { ContactoComponent } from './components/contacto/contacto';
import { DetalleComponent } from './components/detalle/detalle';

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '**', redirectTo: '' }
];