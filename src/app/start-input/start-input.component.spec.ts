import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartInputComponent } from './start-input.component';

describe('StartInputComponent', () => {
  let component: StartInputComponent;
  let fixture: ComponentFixture<StartInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
