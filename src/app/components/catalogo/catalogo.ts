import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasService } from '../../services/noticias';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
})
export class CatalogoComponent implements OnInit {
  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.obtenerNoticias().subscribe({
      next: (data) => {
        console.log('JSON recibido exitosamente:', data);
        // Si tu JSON empieza con { "noticias": [...] }, extraemos el arreglo. 
        // Si ya es un arreglo [...] directo, lo usamos tal cual.
        this.noticias = data.noticias ? data.noticias : data;
      },
      error: (err) => {
        console.error('Error al intentar leer el JSON:', err);
      }
    });
  }
}