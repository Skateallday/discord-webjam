import { Component } from '@angular/core';
import * as todosData from '../assets/todos.json';

@Component({
  selector: 'todos-sidebar',
  templateUrl: './todos.component.html',
  standalone: true,
})
export class TodosComponent {
  todo = todosData[0];
}
