import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // タグ名 <app-root>
  templateUrl: './app.component.html', // テンプレート``
  styleUrls: ['./app.component.scss'] // スタイル
})
export class AppComponent {
  title = 'angular-learn';

  count = 0;
  countUp(){
    this.count++;
  };
  
  name = 'hello world';

  get nameText(){
    return this.name;
  }
  
  parent = 'おや';
  
  items = ['item1', 'item2'];
  addItem(item: string) {
    this.items.push(item);
  }
  image = '../assets/img/idle.jpeg';
  
  condition = false;

  show = true;
}
