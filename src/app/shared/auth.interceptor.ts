import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterCeptor implements HttpInterceptor {

  constructor(private authServie: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted !' + req);
    //const copyReq = req.clone({ headers: req.headers.append('','') });
    const copyReq = req.clone({ params: req.params.append('auth', this.authServie.getToken())});
    return next.handle(req);
  }
}
