import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';
import { CONSTANTS } from '../../../common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
});

  constructor(private _authorizationService: AuthorizationService, private _router: Router){}
  
  protected onSubmit() {
    console.log(this.loginForm?.value);
    if (this.loginForm?.value?.username == null || this.loginForm?.value?.password == null) {
      return;
    }
    
    this._authorizationService.authorize(this.loginForm?.value?.username, this.loginForm?.value?.password);
    if (this._authorizationService.isAuthorized()) {
      console.log("Authorized");
      this._router.navigate([CONSTANTS.ROUTER_LIST]);
    }  
  };
}
