import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductService {
  _albumUrl = "../assets/album.json"
  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<any> {
    return this._http.get(this._albumUrl);
  }
}
