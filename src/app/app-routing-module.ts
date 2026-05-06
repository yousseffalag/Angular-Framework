import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components (pages)
import { Home } from './home/home';
import { Product } from './product/product';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'prods', component: Product }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
