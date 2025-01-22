import { Component } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Not-Found';
}
