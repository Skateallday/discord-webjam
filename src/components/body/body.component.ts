import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AppComponent } from '../../components/app/app.component';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-body',
  imports: [SidebarComponent, AppComponent, TodosComponent],
  templateUrl: `./body.component.html`,
  styleUrl: './body.component.css',
  standalone: true,
})
export class BodyComponent {}
