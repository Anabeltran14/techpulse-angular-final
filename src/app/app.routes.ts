import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo';
import { ContactoComponent } from './components/contacto/contacto';

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' } // Protege contra URLs mal escritas
];