import { Component, OnInit, Input } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';
import { AvesService } from '../../servicios/aves.service';

@Component({
  selector: 'app-ave',
  templateUrl: './ave.component.html',
})
export class AveComponent implements OnInit {
  public paises: any[] = [];
  public ave: any;

  @Input() operacion: string;
  @Input() id: string;

  constructor(public _paisesService: PaisesService,  public _avesService: AvesService) { }

  ngOnInit() {
    this.get();
    if (this.operacion === 'Editar') {
      this._avesService.getPorId(this.id).subscribe(ave => {
        this.ave = ave.json()[0];
      }, err => {
        console.log(err);
      });
    }
  }

  public get() {
    this._paisesService.get().subscribe(paises => {
      this.paises = paises.json();
    }, err => {
      console.log(err);
    });
  }
}
