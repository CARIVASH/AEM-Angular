import { Component, Input, OnInit } from '@angular/core';
import { MapTo } from '@adobe/cq-angular-editable-components';

const BasicComponentEditConfig = {
  emptyLabel: 'Basic Component',
  isEmpty: cqModel =>
    !cqModel || !cqModel.text || cqModel.text.trim().length < 1
};

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrls: ['./basic-component.component.css']
})
export class BasicComponentComponent implements OnInit {
  @Input() text: string;
  @Input() checkbox: boolean;

  constructor() { }

  ngOnInit() {
  }

}

MapTo('angular-project/components/basic-component')(
  BasicComponentComponent,
  BasicComponentEditConfig
);
