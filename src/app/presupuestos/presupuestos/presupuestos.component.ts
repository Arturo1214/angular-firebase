import { Component, OnInit } from '@angular/core';
import {PresupuestosService} from '../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];
  constructor(private presupuestosService: PresupuestosService) { }

  ngOnInit() {
    this.cargarLista();
  }

  eliminarPresupuesto(id$) {
    this.presupuestosService.delPresupuesto(id$)
      .subscribe(res => {
        console.log(res);
        this.cargarLista();
      });
  }

  private cargarLista(): void {
    this.presupuestos = [];
    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        for (const id$ in presupuestos) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
      });
  }
}
