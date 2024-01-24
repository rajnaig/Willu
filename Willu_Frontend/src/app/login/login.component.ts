import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/generated-client';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(private generatedAccountService: AccountService, private router: Router) {}  // Inject Router

  ngOnInit(): void {}

  onLogin() {
    this.generatedAccountService.login(this.model).subscribe({
      next: response => {
        console.warn('Response:', response);
        this.loggedIn = true;
        this.router.navigate(['/home']);
      },
      error: (error) => console.warn(error),
    });
  }
}
