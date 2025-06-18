import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://localhost:8081/api/citas';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCitaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
