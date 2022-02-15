import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingProjectsComponent } from './coding-projects.component';

describe('CodingProjectsComponent', () => {
  let component: CodingProjectsComponent;
  let fixture: ComponentFixture<CodingProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
