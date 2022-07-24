import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentLIbraryManagement';

  public loginValid = true;
  public username = '';
  public password = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginValid = true;
  }
}
