import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'final-frontend-web';
  stringsList: string[] = ['one', 'two', 'three'];

  bookForm = new FormGroup({
    name: new FormControl(''),
    library: new FormControl(''),
  });

  onSubmit() {
    console.log('submit');
  }
}
