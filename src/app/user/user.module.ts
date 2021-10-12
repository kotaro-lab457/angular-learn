import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from "./user.component";
import { UserItemComponent } from "./user-item/user-item.component";
import { UserListComponent } from './user-list/user-list.component';
import { UserListFilterComponent } from './user-list-filter/user-list-filter.component';
import { Store } from "./service/store.service";

const routes: Routes = [
  { path: 'users', component: UserComponent,
    children: [
      { path: '', component: UserListComponent },
    ]
  },
]

@NgModule({
  declarations: [
    UserItemComponent,
    UserListComponent,
    UserListFilterComponent,
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