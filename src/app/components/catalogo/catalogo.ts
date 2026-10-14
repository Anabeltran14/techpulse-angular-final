import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <-- 1. Importamos la herramienta de rutas
import { NoticiasService } from '../../services/noticias';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterLink], // <-- 2. La agregamos a la lista de imports
  templateUrl: './catalogo.html',
})
export class CatalogoComponent implements OnInit {
  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.obtenerNoticias().subscribe({
      next: (data) => {
        this.noticias = data.noticias ? data.noticias : data;
      },
      error: (err) => {
        console.error('Error al intentar leer el JSON:', err);
      }
    });
  }
}