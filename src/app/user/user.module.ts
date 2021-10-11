import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserService } from "./service/user.service";
import { UserComponent } from "./user.component";
import { UserItemComponent } from "./user-item/user-item.component";
import { UserListComponent } from './user-list/user-list.component';

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
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: []
})

export class UserModule { };