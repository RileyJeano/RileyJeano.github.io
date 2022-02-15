import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'oButton',
  templateUrl: './o-button.component.html',
  styleUrls: ['./o-button.component.scss']
})
export class OButtonComponent implements OnInit {

  constructor() { }
  @Input() text = ""
  @Input() targetLocation = ""
  ngOnInit(): void {
  }

}
