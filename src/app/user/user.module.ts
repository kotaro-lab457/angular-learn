import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from "./user.component";
import { UserItemComponent } from "./user-item/user-item.component";
import { UserListComponent } from './user-list/user-list.component';
import { UserListFilterComponent } from './user-list-filter/user-list-filter.component';
import { Store } from "./service/store.service";
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'users', component: UserComponent,
    children: [
      { path: '', component: UserListComponent },
      { path: ':userId', component: UserDetailComponent },
    ]
  },
]

@NgModule({
  declarations: [
    UserItemComponent,
    UserListComponent,
    UserListFilterComponent,
    UserDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    Store
  ],
  bootstrap: []
})

export class UserModule { };