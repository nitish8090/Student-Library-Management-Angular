import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookFormComponent } from './forms/book-form/book-form.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'AdminDashBoard',
        component: AdminDashboardComponent,
        children: [
          {
            path: 'Book',
            component: BookFormComponent
          },
          {
            path: 'Student',
            component: StudentFormComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
