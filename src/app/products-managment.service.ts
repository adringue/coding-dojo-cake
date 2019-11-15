import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsManagmentService {
  private _hide_main = new BehaviorSubject<boolean>(false);
  private _hide_products = new BehaviorSubject<boolean>(false);
  private _hide_edit = new BehaviorSubject<boolean>(false);
  private _hide_create = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  get hideMain() {
    return this._hide_main;
  }

  public changeHideMain(val) {
    this._hide_main.next(val);
  }

  get hideProducts() {
    return this._hide_products;
  }

  public changeHideProducts(val) {
    this._hide_products.next(val);
  }

  get hideEdit() {
    return this._hide_edit;
  }

  public changeHideEdit(val) {
    this._hide_edit.next(val);
  }

  get hideCreate() {
    return this._hide_create;
  }
  ////-----------------------------------------------------------

  public changeHideCreate(val) {
    this._hide_create.next(val);
  }

  public createProduct(prodObject): Observable<any> {
    return this.http.post('/api/create_product', prodObject);
  }
  public createRate(prodObject,cake_id): Observable<any> {
    return this.http.post('/api/new_rate/'+ cake_id,prodObject);
  }

  public getProducts(): Observable<any> {
    return this.http.get('/api/products');
  }

  public getProductById(productId: string): Observable<any> {
    return this.http.get('/api/product/' + productId);
  }

  public edit(data, productId): Observable<any> {
    return this.http.post('/api/edit/' + productId, data);
  }

  public delete(productId): Observable<any> {
    return this.http.delete('/api/delete/' + productId);
  }
}
