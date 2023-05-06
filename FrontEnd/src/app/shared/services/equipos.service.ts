import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../Interface/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<any> {
    const url: string = 'http://localhost:4000/equipos';
    return this.http.get<any>(url);
  }

  getEquipo(equipoId: string): Observable<any> {
    const url: string = `http://localhost:4000/equipos/${equipoId}`;
    return this.http.get<any>(url);
  }

  deleteEquipos(equipoId: string): Observable<any>{
    const url: string = `http://localhost:4000/equipos/${equipoId}`;
    return this.http.delete<any>(url);
  }

  putEquipo(equipoId: string, equipo: any): Observable<any>{
    const url: string = `http://localhost:4000/equipos/${equipoId}`;
    return this.http.put<any>(url, equipo);
  }

  postEquipo(equipo: Equipo): Observable<Equipo>{
    const url: string = `http://localhost:4000/equipos`;
    return this.http.post<Equipo>(url, equipo);
  }
}
