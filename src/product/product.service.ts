import { Injectable } from '@nestjs/common';


@Injectable()
export class ProductService {

  public products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
  ];


  findAll() {
    return [
      { id: 1, name: 'Producto 1' },
      { id: 2, name: 'Producto 2' },
      { id: 3, name: 'Producto 3' },
      { id: 4, name: 'Producto 4' },
      { id: 5, name: 'Producto 5' },
      { id: 6, name: 'Producto 6' },
      { id: 7, name: 'Producto 7' },
    ];
  }

}
