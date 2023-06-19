import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './registration';

@Injectable({
  providedIn: 'root',
})
export class RegistrationServiceService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/customer';
  private validateUrl = 'http://localhost:8080/customer/check-username';

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  save(user: Customer): Observable<any> {
    console.log('saved', user);
    return this.http.post(this.url, user);
  }

  validateUsername(user: Customer): Observable<any> {
    return this.http.get<any>(this.validateUrl + '/' + user.username);
  }
}
