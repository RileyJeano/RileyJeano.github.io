import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OButtonOutsideComponent } from './o-button-outside.component';

describe('OButtonOutsideComponent', () => {
  let component: OButtonOutsideComponent;
  let fixture: ComponentFixture<OButtonOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OButtonOutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OButtonOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
