import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

private base_url = environment.baseUrl;
private public_key = environment.publicKey;
private hash = environment.hash;

constructor(public httpClient: HttpClient) { }

  public get(path: string, params: string = ''): Observable<any> {
    return this.httpClient
            .get(`${this.base_url + path}?ts=1&apikey=${this.public_key}&hash=${this.hash}${params}`)
            .pipe(catchError((e: HttpErrorResponse) => throwError(e)));
  }
}