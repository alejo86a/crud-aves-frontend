import { Component, OnInit } from '@angular/core';
import { AvesService } from '../../servicios/aves.service';


declare let swal: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public aves: any[] = [];
  public editarAve: any[] = [];
  public inputBusqueda = '';


  constructor( public _avesService: AvesService) {


   }

  ngOnInit() {
     this.get();
  }

  public getPorZona() {
    this._avesService.getPorZonas(this.inputBusqueda).subscribe(aves => {
      this.aves = aves.json();
    }, err => {
      console.log(err);
    });
  }

  public getPorNombre() {
    this._avesService.getPorNombre(this.inputBusqueda).subscribe(aves => {
      this.aves = aves.json();
    }, err => {
      console.log(err);
    });
  }

  public get() {
    this._avesService.get().subscribe(aves => {
      this.aves = aves.json();
    }, err => {
      console.log(err);
    });
  }

  public eliminarAve(index: string) {
      this._avesService.delete(index).subscribe(succ => {
        console.log("Eliminando");
        this.get();
          setTimeout(function(){
              swal('Eliminado!', 'la venta se ha eliminado exitosamente.', 'success');
            }, 3000);
        }, err => {
          console.log(err);
        });
  }

}
