import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRoundMessageComponent } from './last-round-message.component';

describe('LastRoundMessageComponent', () => {
  let component: LastRoundMessageComponent;
  let fixture: ComponentFixture<LastRoundMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastRoundMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRoundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
