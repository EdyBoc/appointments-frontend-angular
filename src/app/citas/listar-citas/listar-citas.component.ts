import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../services/cita.service';




@Component({
  selector: 'app-listar-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-citas.component.html',
  styleUrl: './listar-citas.component.scss'
})
export class ListarCitasComponent {
  citas: any[] = [];

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas() {
    this.citaService.getCitas().subscribe(
      (data) => {
        this.citas = data;
        console.log('Citas cargadas:', this.citas);
      },
      (error) => {
        console.error('Error al obtener citas:', error);
      }
    );
  }

  formatFecha(fecha: any): string {
    let date: Date;

    if (Array.isArray(fecha)) {
      date = new Date(fecha[0], fecha[1] - 1, fecha[2], fecha[3], fecha[4]);
    } else {
      date = new Date(fecha);
    }

    return date.toLocaleString('es-GT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }


}




