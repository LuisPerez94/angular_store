import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', title: 'Inicio', component: HomeComponent },
  { path: 'contact', title: 'Contacto', component: ContactComponent },
  {
    path: 'collection/:categorySlug',
    title: 'Productos',
    component: CollectionComponent,
  },
  {
    path: 'product/:productSlug',
    title: 'Producto',
    component: ProductComponent,
  },
];
