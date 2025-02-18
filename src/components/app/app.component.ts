import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: `./app.component.html`,
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class AppComponent {
  todoForm = new FormGroup({
    heading: new FormControl(''),
    body: new FormControl(''),
  });

  submittedData: any = null;

  onSubmit(): void {
    // Process checkout data here
    this.submittedData = this.todoForm.value;
  }
}
