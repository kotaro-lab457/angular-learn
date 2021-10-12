import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { Store } from './store.service';
import { User } from '../user';

@Injectable({ providedIn: 'root' })
export class UserService {

  get users$() {
    return this.store.select(state => state.userList.items);
  }

  constructor(private http: HttpClient, private store: Store) { }

  async fetchUsers() {
    const users = await firstValueFrom(
      this.http
        .get<{ data: User[] }>('https://reqres.in/api/users')
        .pipe(map(resp => resp.data))
    );

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }
}
