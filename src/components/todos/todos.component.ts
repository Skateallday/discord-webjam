import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import todosData from '../../assets/todos.json';

interface Todo {
  id: number;
  heading: string;
  body: string;
  completed: boolean;
  due_date: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TodosComponent {
  todos: Todo[] = todosData; // ✅ Assign directly (since JSON is an array)

  constructor() {
    
    console.log(this.todos); // ✅ Check if data is loading correctly
  }
}
