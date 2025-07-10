import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl ='http://localhost:9090/api_paciente/paciente'
  constructor(private http:HttpClient) { }

  getPacientes(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
