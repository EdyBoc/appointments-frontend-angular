import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-detalle-cita',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './detalle-cita.component.html',
  styleUrl: './detalle-cita.component.scss'
})
export class DetalleCitaComponent {

  form: FormGroup;
  esNuevo = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private citaService: CitaService
  ) {
    this.form = this.fb.group({
      id: [0],
      medico: ['', Validators.required],
      fechaHora: ['', Validators.required],
      estado: ['pendiente', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.esNuevo = id === 0;

    if (!this.esNuevo) {
      this.citaService.getCitaPorId(id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  guardar() {
    const cita = this.form.value;
    if (this.form.invalid) return;

    if (this.esNuevo) {
      this.citaService.crearCita(cita).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.citaService.actualizarCita(cita).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }

}
