import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found-404/not-found-404.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
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
  {
    path: 'wishlist',
    title: 'Lista de deseos',
    component: WishlistComponent,
  },
  {
    path: '**',
    component: NotFound404Component,
  },
];
