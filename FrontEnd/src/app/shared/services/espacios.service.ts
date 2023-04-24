import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espacio } from '../Interface/espacio';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {

  constructor(private http: HttpClient) { }

  getEspacios(): Observable<any> {
    const url: string = 'http://localhost:4000/espacios';
    return this.http.get<any>(url);
  }

  deleteEspacios(espacioId: string): Observable<any> {
    const url: string = `http://localhost:4000/espacios/${espacioId}`;
    return this.http.delete<any>(url);
  }

  putEspacio(espacioId: string, espacio: any): Observable<any> {
    const url: string = `http://localhost:4000/espacios/${espacioId}`;
    return this.http.put<any>(url, espacio);
  }

  postEspacio(espacio: Espacio): Observable<any> {
    const url: string = `http://localhost:4000/espacios`;
    return this.http.post<Espacio>(url, espacio);
  }
}
