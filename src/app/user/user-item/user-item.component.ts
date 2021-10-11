import { Component, Input,  } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {

  @Input() user!: User;
}