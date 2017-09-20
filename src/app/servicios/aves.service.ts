import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AvesService {

  private URL_Aves = 'https://crud-aves-backend-alejo86a.c9users.io/';
  private apiHost: string;

   constructor(private  http: Http) {
  }

  public get(): Observable<Response> {
    return this.http.get(`${this.URL_Aves}ave`);
  }

  public delete(index: string): Observable<Response> {
    console.log("Delete");
    return this.http.delete(`${this.URL_Aves}ave/${index}`);
  }

  public getPorZonas(zona: string): Observable<Response> {
    return this.http.get(`${this.URL_Aves}ave/zona/${zona}`);
  }

  public getPorId(id: string): Observable<Response> {
    return this.http.get(`${this.URL_Aves}ave/${id}`);
  }

  public getPorNombre(nombre: string): Observable<Response> {
    return this.http.get(`${this.URL_Aves}ave/nombre/${nombre}`);
  }
}
