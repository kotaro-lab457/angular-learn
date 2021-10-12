import { Injectable } from '@angular/core';
import { Store } from '../service/store.service';
import { UserApiService } from '../service/user-api.service';

@Injectable({ providedIn: 'root' })
export class UserDetailUsecase {
  constructor(private userApi: UserApiService, private store: Store) {}

  // storeのユーザー情報の取得
  get user$() {
    return this.store.select(state => state.userDetail.user);
  }

  // ユーザーIDに応じたユーザー情報の取得
  async fetchUser(userId: string) {
    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null
      }
    }));

    const user = await this.userApi.getUserById(userId);

    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user
      }
    }));
  }
}
