import { Component, OnInit} from '@angular/core';
import { UserListFilter } from '../state';
import { UserListUsecase } from '../usecase/user-list.usecase';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$ = this.userList.users$;
  userListFilter$ = this.userList.filter$;

  // 変数定義
  constructor(private userList: UserListUsecase) {}

  ngOnInit() {
    this.userList.fetchUsers();
  }

  setUserListFilter(value: UserListFilter) {
    this.userList.setNameFilter(value.nameFilter);
  }
}
