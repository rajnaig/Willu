import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Willu AI';
  showSidebar = true;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        if (
          event.urlAfterRedirects === '/login' ||
          event.urlAfterRedirects === '/register'
        ) {
          this.showSidebar = false;
        } else {
          this.showSidebar = true;
        }
      });
  }
}
