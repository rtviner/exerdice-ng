import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseInfoComponent } from './exercise-info.component';

describe('ExerciseInfoComponent', () => {
  let component: ExerciseInfoComponent;
  let fixture: ComponentFixture<ExerciseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
