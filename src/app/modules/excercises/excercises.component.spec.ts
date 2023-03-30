import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcercisesComponent } from './excercises.component';

describe('ExcercisesComponent', () => {
  let component: ExcercisesComponent;
  let fixture: ComponentFixture<ExcercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
