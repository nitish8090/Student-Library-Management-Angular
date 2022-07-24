import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../interface/book';
import { Student } from '../interface/student';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  books :Book[]= [];
  students:Student[] = [];
  librarians = [1, 2];

  constructor(private bookService: BookService, private studentService: StudentService) { }

  ngOnInit(): void {

    // Populate books
    this.bookService.getBooks().subscribe(
      {
        next: (data) => {
          this.books = data
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      }
    );

    // Populate Students
    this.studentService.getStudents().subscribe(
      {
        next: (data) => {
          this.students = data
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      }
    )

    // Populate Librarians
  }

}
