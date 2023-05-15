import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/shared/Interface/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  postReserva(reserva: Reserva): Observable<Reserva>{
    const url: string = `http://localhost:4000/reservas`;
    return this.http.post<Reserva>(url, reserva);
  }

  getReservas(reservaId: string): Observable<any> {
    const url: string = `http://localhost:4000/reservas/${reservaId}`;
    return this.http.get<any>(url);
  }
}
