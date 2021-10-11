import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

// router でパス, コンポーネントを読み込む
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'user', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    UserModule,
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
