import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, map, distinctUntilChanged } from 'rxjs';
import { UserDetailUsecase } from '../usecase/user-detail.usecase';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$ = this.userDetailUsecase.user$;
  private onDestroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private userDetailUsecase: UserDetailUsecase
    ) {}

  ngOnInit() {
  this.route.params.pipe(
    // takeUntil() 値が流れたら処理の中断
    takeUntil(this.onDestroy$),
    // paramsからuserIdを取り出す
    map(params => params['userId']),
    // userIdが変わったときだけ値を流す
    distinctUntilChanged(),
    ).subscribe(userId => {
      // ユーザーIDを使った処理を記述する
      this.userDetailUsecase.fetchUser(userId)
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}