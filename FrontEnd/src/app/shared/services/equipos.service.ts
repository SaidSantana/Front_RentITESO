import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../Interface/equipo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<any> {
    const url: string = environment.apiUrl+'/equipos';
    return this.http.get<any>(url);
  }

  getEquipo(equipoId: string): Observable<any> {
    const url: string = environment.apiUrl+`/equipos/${equipoId}`;
    return this.http.get<any>(url);
  }

  deleteEquipos(equipoId: string): Observable<any>{
    const url: string = environment.apiUrl+`/equipos/${equipoId}`;
    return this.http.delete<any>(url);
  }

  putEquipo(equipoId: string, equipo: any): Observable<any>{
    const url: string = environment.apiUrl+`/equipos/${equipoId}`;
    return this.http.put<any>(url, equipo);
  }

  postEquipo(equipo: Equipo): Observable<Equipo>{
    const url: string = environment.apiUrl+`/equipos`;
    return this.http.post<Equipo>(url, equipo);
  }
}
