import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // Traer los datos de firebase
  productList: AngularFireList<any>;

  // Una variable temporal, para guardar los datos seleccionados, del tipo Product
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  // Traer todos los productos desde firebase 
  getProducts() { // guarda los elementos en la varible 'products'
    return this.productList = this.firebase.list('products');
  }

  // crear un nuevo producto  , recibiendo un parametro de tipo Product
  insertProduct(product: Product) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo Product , puede acceder a sus propiedades
    this.productList.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  // Actualiza un producto, recibiendo un parametro de tipo Product
  updateProduct(product: Product) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.productList.update(product.$key, {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteProduct($key: string) {
    this.productList.remove($key);
  }

}
