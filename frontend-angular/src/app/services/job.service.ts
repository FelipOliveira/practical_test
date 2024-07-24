import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Job[]> {
    return this.http.get<Job[]>(`${baseUrl}/jobs`);
  }

  get(id: any): Observable<Job> {
    return this.http.get(`${baseUrl}/jobs/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/jobs`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/jobs/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/jobs/${id}`);
  }

  findByTitle(title: any): Observable<Job[]> {
    return this.http.get<Job[]>(`${baseUrl}/jobs?title=${title}`);
  }
}
