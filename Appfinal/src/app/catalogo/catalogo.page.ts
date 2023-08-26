import { Component, OnInit } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descuento: string;
  descripcion: string;
  imagenUrl: string;
  
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  productos: Producto[] = [
    { id: 1,
      nombre: 'Bloodborne',
      precio: 49990,
      descuento: " Actualmente este producto tiene un 10% de descuento, oferta exclusiva pagando con CMR",
      descripcion:"Bloodborne es un desafiante videojuego de acción y RPG con ambientación gótica y combates intensos contra criaturas grotescas.",
      imagenUrl: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/YMEGNGX3QVNJZC4YMYXEDCDW7I.jpg'
    },
    { id: 2,
      nombre: 'Destiny',
      precio: 39990,
      descuento: " Actualmente este producto tiene un 10% de descuento, oferta exclusiva pagando con CMR",
      descripcion:"Destiny es un shooter en línea que combina acción y elementos de rol en un vasto universo futurista.",
      imagenUrl: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/XVRM4ZSAIRIFVOQ5U5EFOYJ6ZQ.jpg' },
    { id: 3,
      nombre: 'Uncharted 4: A Thief\'s End',
      precio: 49990,
      descuento: " Actualmente este producto tiene un 10% de descuento, oferta exclusiva pagando con CMR",
      descripcion:
      "Uncharted 4 es un juego de aventuras y acción que sigue a Nathan Drake en busca de tesoros, con gráficos impresionantes.",
      imagenUrl: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/UXT2MHW3GZIZVICCIMPIDDZEBQ.jpg' },
    
  ];
  
  constructor() { }

  ngOnInit() {

  }
}
