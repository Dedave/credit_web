import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetContactedComponent } from './not-yet-contacted.component';

describe('NotYetContactedComponent', () => {
  let component: NotYetContactedComponent;
  let fixture: ComponentFixture<NotYetContactedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotYetContactedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotYetContactedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
