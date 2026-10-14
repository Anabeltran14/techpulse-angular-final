import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoticiasService } from '../../services/noticias';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.html',
})
export class DetalleComponent implements OnInit {
  noticia: any = null;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.noticiasService.obtenerNoticias().subscribe({
      next: (data: any) => {
        const arregloNoticias = data.noticias ? data.noticias : data;
        // Busca la noticia exacta por su ID
        this.noticia = arregloNoticias.find((n: any) => n.id == id);
      }
    });
  }
}