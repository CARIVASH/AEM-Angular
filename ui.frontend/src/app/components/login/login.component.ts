import { MapTo } from '@adobe/cq-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

const LoginComponentEditConfig = {
  emptyLabel: 'Login Component',
  isEmpty: cqModel =>
    !cqModel || !cqModel.text || cqModel.text.trim().length < 1
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}

MapTo('angular-project/components/login')(
  LoginComponent,
  LoginComponentEditConfig
);
