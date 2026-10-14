import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  // Agregamos el '/' al inicio para asegurar que lo busque en la raíz de la carpeta public
  private jsonUrl = 'data/noticias.json';

  constructor(private http: HttpClient) { }

  obtenerNoticias(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
