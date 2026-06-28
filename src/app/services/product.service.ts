import { Injectable } from '@angular/core';
import { Iproduct, IresProduct } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productsArr: Array<Iproduct> = [
  {
    pname: 'Samsung Galaxy S25',
    pid: '301',
    pstatus: 'Delivered',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/1/300/200'
  },
  {
    pname: 'Sony WH-1000XM5 Headphones',
    pid: '302',
    pstatus: 'In-Progress',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/29/300/200'
  },
  {
    pname: 'LG Smart LED TV',
    pid: '303',
    pstatus: 'Dispatched',
    canReturn: 0,
    pimg: 'https://picsum.photos/id/42/300/200'
  },
  {
    pname: 'Acer Aspire 7 Laptop',
    pid: '304',
    pstatus: 'Delivered',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/48/300/200'
  },
  {
    pname: 'Mi Smart Band 9',
    pid: '305',
    pstatus: 'In-Progress',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/64/300/200'
  },
  {
    pname: 'Logitech MX Master 3S Mouse',
    pid: '306',
    pstatus: 'Dispatched',
    canReturn: 0,
    pimg: 'https://picsum.photos/id/106/300/200'
  },
  {
    pname: 'Amazon Kindle Paperwhite',
    pid: '307',
    pstatus: 'Delivered',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/119/300/200'
  },
  {
    pname: 'OnePlus Pad 2',
    pid: '308',
    pstatus: 'In-Progress',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/160/300/200'
  }
];
  constructor() { }
  
  fetchProductdata(): Observable<Iproduct[]> {
    return of(this.productsArr)
  }

  fetchProductId(id:string):Observable<Iproduct>{
    let productObj=this.productsArr.find(t=>t.pid===id)!
    return of(productObj)
  }

  createProduct(product:Iproduct):Observable<IresProduct<Iproduct>>{
    this.productsArr.push(product)

    return of({
      msg:`The porduct ${product.pname} is added successfully!!`,
      data:product
    })
  }

  removeproduct(product:string):Observable<IresProduct<Iproduct>>{
    let get_index=this.productsArr.findIndex(t=>t.pid===product)
    let products=this.productsArr.splice(get_index,1)
    return of({
      msg:`The Product ${products[0].pname} is removed succefully!!`,
      data:products[0]
    })
  }

  updateProduct(product:Iproduct):Observable<IresProduct<Iproduct>>{
    let get_index=this.productsArr.findIndex(t=>t.pid===product.pid)
    this.productsArr[get_index]=product
    return of({
      msg:`The product ${product.pname} is updated Successfully!!`,
      data:product
    })
  }
}
