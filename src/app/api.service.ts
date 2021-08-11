import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 7271cdd52fd886bc9917145781f084dbb677d19b'

  })

  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
