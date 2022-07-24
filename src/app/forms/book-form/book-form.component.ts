import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  displayedColumns: string[] = ['s_no', 'student_name', 'issued_on'];
  dataSource = [{"s_no": 1, "student_name": "Nitish Student", "issued_on": "2022-02-03"}];

  constructor() { }

  ngOnInit(): void {
  }

}
