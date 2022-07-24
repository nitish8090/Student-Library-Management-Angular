import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interface/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    const headers = new HttpHeaders({
      Authorization: "Token 7ddeeb977d5e790b2cee7faddd92344258d8f4b0"
    });
    return this.http.get<Student[]>('https://www.nitishpatel.in/api/SLM/Person/Student/', { headers: headers })
  }

  postStudent(): Observable<Student>{
    const headers = new HttpHeaders({
      Authorization: "Token 7ddeeb977d5e790b2cee7faddd92344258d8f4b0"
    });
    return this.http.post<Student>('https://www.nitishpatel.in/api/SLM/Person/Student/', {},  {headers: headers })
  }
}
