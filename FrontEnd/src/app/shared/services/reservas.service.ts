import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/shared/Interface/reserva';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  postReserva(reserva: Reserva): Observable<Reserva>{
    const url: string = environment.apiUrl+`/reservas`;
    return this.http.post<Reserva>(url, reserva);
  }

  getReservas(reservaId: string): Observable<any> {
    const url: string = environment.apiUrl+`/reservas/${reservaId}`;
    return this.http.get<any>(url);
  }

  delteReserva(reservaId: string): Observable<any>{
    const url: string = environment.apiUrl+`/reservas/${reservaId}`;
    return this.http.delete(url);
  }
}
