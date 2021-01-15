import { Component, Input, OnInit } from '@angular/core';
import {MapTo } from '@adobe/cq-angular-editable-components';

const HeaderConfig = {
  emptyLabel: 'Header Component',
  isEmpty: cqModel =>
    !cqModel || !cqModel.text || cqModel.text.trim().length < 1
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() text: string;
  @Input() checkbox: string;
  constructor() { }

  ngOnInit() {
  }

}

MapTo('angular-project/components/header')(
  HeaderComponent,
  HeaderConfig
);
