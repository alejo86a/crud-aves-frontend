import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaisesService {

  private URL_Aves = 'https://crud-aves-backend-alejo86a.c9users.io/';
  private apiHost: string;

   constructor(private  http: Http) {
  }

  public get(): Observable<Response> {
    return this.http.get(`${this.URL_Aves}pais`);
  }
}
