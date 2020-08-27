import { Component, OnInit } from '@angular/core';
import { appConstants } from '../../global/constants/index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  btnAcept = appConstants.BUTON_ACEPT;
  btnCancel = appConstants.BUTTON_CANCEL;
  constructor(
    private router: Router,
  ) { }
  logear(): void {
    this.router.navigate(['sistema']);
  }
  ngOnInit(): void {
  }

}
