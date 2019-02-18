import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { of, throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _islogged: BehaviorSubject<boolean>;

  constructor() {
    this._islogged = new BehaviorSubject<boolean>(false);
  }
  login(email: string, password: string): Observable<string> {
    if (email === 'a@a.com' && password === 'aaa') {
      return of('laksjddas').pipe(
        map(res => {
          this.setToken(res);
          this._islogged.next(true)
          return res;
        })
      );
    }
    else {
      return throwError('user or password incorrect');
    }
  }
  private setToken(t: string) {
    window.localStorage.setItem(environment.tokenKey, t);
  }
  private getToken(): string {
    return window.localStorage.getItem(environment.tokenKey);
  }

  private deletToken() {
    return window.localStorage.removeItem(environment.tokenKey);
  }
  logout() {
    this._islogged.next(false)
    this.deletToken();
  }
  isLogged(): Observable <boolean> {
    return this._islogged
  }
}

