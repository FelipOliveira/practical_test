import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Job } from '../models/job.model';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient)  { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/users`);
  }

  get(id: any): Observable<User> {
    return this.http.get(`${baseUrl}/users/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/users`, data);
  }

  addJobToUser(id: any , data: any): Observable<any> {
    return this.http.post(`${baseUrl}/users/${id}/jobs`, data);
  }

  getJobsAvaliable(id: any): Observable<Job[]> {
    return this.http.get<User[]>(`${baseUrl}/users/${id}/jobs`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/users/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/users/${id}`);
  }

  findByName(username: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/users?username=${username}`);
  }
}
