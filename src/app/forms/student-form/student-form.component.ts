import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm = this.formBuilder.group({
    serial: '',
    f_name: '',
    l_name: '',
    full_name: '',
    username: this.formBuilder.group({
      username: '',
      password: ''
    })
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  postStudent(): void {
    console.log(this.studentForm.value)
  }

}
