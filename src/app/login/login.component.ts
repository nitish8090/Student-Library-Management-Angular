import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginData: any;

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(whichForm: string): void {
    console.log("Login function executed")
    console.log(this.loginForm.value)
    console.log(whichForm)

    if (whichForm === 'StudentLogin') {
      return;
    }
    else if (whichForm === 'LibrarianLogin') {
      return;
    }
    else if (whichForm === 'AdminLogin') {
      const headers = new HttpHeaders({
        Authorization: "Token 7ddeeb977d5e790b2cee7faddd92344258d8f4b0"
      });


      var url = "https://www.nitishpatel.in/api/SLM/UserManager/User/Login/"
      var a = this.http.post(url, this.loginForm.value, { headers: headers }).subscribe(
        {
          next: (data) => {
            console.log("OK", data);
            this.loginData = data
            localStorage.setItem('Token', this.loginData.token);
            this._snackBar.open(this.loginData.message, "Dismiss", { duration: 3000 });
            this.router.navigate(['AdminDashBoard'], {relativeTo: this.route});
          },
          error: (err) => {
            console.log("Error: ", err);
            this._snackBar.open("Login Failed (" + err.error + ")", "Dismiss", { duration: 3000 });
          }
        });
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
