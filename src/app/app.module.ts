import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ // コンポーネント宣言
    AppComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule, // ブラウザ上で動作
    AppRoutingModule, // ルーティング
    FormsModule,
  ],
  providers: [], // 利用したいサービスを指定？
  bootstrap: [AppComponent] // ルートコンポーネントの指定
})
export class AppModule { }
