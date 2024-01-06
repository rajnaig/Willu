import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/generated-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Willu AI';
  users: any;
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userAll()
      .subscribe({
        next: response => this.users = response,
        error: error => console.error(error),
        complete: () => console.log('Request has completed')
      });
  }
  
}