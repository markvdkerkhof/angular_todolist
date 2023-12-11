import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _isAuthorized: boolean = false;

  constructor() { }

  isAuthorized(): boolean {
    return this._isAuthorized;
  }

  authorize(userName: string, password: string): boolean {
    if (userName === 'admin' && password === 'admin') {
      this._isAuthorized = true;
    }

    return this.isAuthorized();
  }
}
