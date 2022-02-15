import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'oButton-outside',
  templateUrl: './o-button-outside.component.html',
  styleUrls: ['./o-button-outside.component.scss']
})
export class OButtonOutsideComponent implements OnInit {

  constructor() { }
  @Input() text = ""
  @Input() targetLocation = ""
  ngOnInit(): void {
  }

}
