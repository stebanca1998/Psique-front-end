import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent implements OnInit {

  @Input() name:string;

  @Input() source:string;

  path:string

  color:string = "#017F8D"

  constructor() { }

  ngOnInit() {
    this.path= "../../../assets/CardLogos/"+this.source+".png"
  }

}
