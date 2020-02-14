import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundInfoComponent } from './round-info.component';

describe('RoundInfoComponent', () => {
  let component: RoundInfoComponent;
  let fixture: ComponentFixture<RoundInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
