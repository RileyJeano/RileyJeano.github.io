import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() titleFront = ""
  @Input() titleBack = ""
  @Input() description = ""
  @Input() link = ""
  @Input() linkDescription = ""
  @Input()projectImage = "";
  constructor() { }

  ngOnInit(): void {
  }

}
