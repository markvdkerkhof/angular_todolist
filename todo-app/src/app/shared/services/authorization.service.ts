import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _isAuthorized: boolean = false;
  
  public isAuthorized(): boolean {
    console.log('isAuthorizedAsMethod', this._isAuthorized);    
    return this._isAuthorized;
  }
  constructor() { }

  authorize(userName: string, password: string): boolean {
    if (userName === 'admin' && password === 'admin') {
      this._isAuthorized = true;
    }

    return this.isAuthorized();
  }
}
