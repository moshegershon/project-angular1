import { Component } from '@angular/core';
import { longStackSupport } from 'q';
import { AuthService } from './servises/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InClassAngular';

  constructor(private authService: AuthService) { }


  logout() {
    this.authService.logout();
  }
}
