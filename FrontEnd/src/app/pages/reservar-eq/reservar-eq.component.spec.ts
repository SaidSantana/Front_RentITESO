import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarEqComponent } from './reservar-eq.component';

describe('ReservarEqComponent', () => {
  let component: ReservarEqComponent;
  let fixture: ComponentFixture<ReservarEqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarEqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarEqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
