import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../service/paciente.service';


@Component({
  selector: 'app-listar-pacientes',
  standalone: false,
  templateUrl: './listar-pacientes.component.html',
  styleUrl: './listar-pacientes.component.css'
})
export class ListarPacientesComponent implements OnInit {
  pacientes: any[] = [];
  globalFilter: string = '';
  loading: boolean = true;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('ERROR cargando pacientes', err);
        this.loading = false;
      }
    });
  }
}

