import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Willu AI';
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:5092/api/users')
      
      .subscribe({
        next: response => this.users = response,
        error: error => console.error(error),
        complete: () => console.log('Request has completed')
      });
  }
  
}
