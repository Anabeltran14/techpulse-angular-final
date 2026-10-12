import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
})
export class ContactoComponent {
  mensajeEnviado: boolean = false;

  enviarMensaje(event: Event) {
    event.preventDefault(); // Evita que la página se recargue
    
    // Mostramos el mensaje verde de éxito
    this.mensajeEnviado = true;

    // Limpiamos los campos del formulario
    const form = event.target as HTMLFormElement;
    form.reset();
    
    // Ocultamos el mensaje verde automáticamente después de 3 segundos
    setTimeout(() => {
      this.mensajeEnviado = false;
    }, 3000);
  }
}