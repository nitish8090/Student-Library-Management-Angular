import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interface/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  base_url: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.base_url = 'https://www.nitishpatel.in/api/SLM/Library/Book/';
    this.headers = new HttpHeaders({
      Authorization: `Token ${localStorage.getItem("Token")}`
    });
  }

  getBooks(): Observable<Book[]> {
    var token = localStorage.getItem("Token")
    return this.http.get<Book[]>(this.base_url, { headers: this.headers });
  }

  getBook(): Observable<Book>{
    return this.http.get<Book>(`${this.base_url}1/`, { headers: this.headers });
  }

  postBook(): Observable<Book>{
    return this.http.post<Book>(this.base_url, {}, { headers: this.headers })
  }
}
