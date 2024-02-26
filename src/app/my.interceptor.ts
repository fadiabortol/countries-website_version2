import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      params: (request.params ? request.params : new HttpParams()).set('lang', "EN")
    });
    console.log(newReq.url);
    //return next.handle(request);
    return next.handle(newReq);
  }
}
