import { Injectable } from '@angular/core';
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { State, initialState } from '../state';

@Injectable({ providedIn: 'root' })
export class Store {

  // 初期値の状態保持（コンポーネント間の共有）
  private _state$ = new BehaviorSubject<State>(initialState);

  // データ（状態）の更新
  update(fn: (state: State) => State) {
    const current = this._state$.value;

    // キューに格納
    queueScheduler.schedule(() => {
      this._state$.next(fn(current));
    });
  }

  // データ（状態）の購読
  select<T>(selector: (state: State) => T) {
    console.log("selector", selector);

    // map()はストリームで取得した値を違うデータで返す動作
    // distinctUntilChanged() で同じものを一つにしている。filter
    return this._state$.pipe(
      map(selector),
      distinctUntilChanged(),
    );
  }
}
