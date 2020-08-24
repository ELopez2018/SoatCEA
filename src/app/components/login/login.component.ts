import { Component, OnInit } from '@angular/core';
import { appConstants } from '../../global/constants/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnSave = appConstants.BUTTON_SAVE;
  btnDelete = appConstants.BUTTON_DELETE;
  btnCancel = appConstants.BUTTON_CANCEL;
  constructor() { }

  ngOnInit(): void {
  }

}
