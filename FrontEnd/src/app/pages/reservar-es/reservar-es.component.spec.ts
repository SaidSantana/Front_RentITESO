import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarEsComponent } from './reservar-es.component';

describe('ReservarEsComponent', () => {
  let component: ReservarEsComponent;
  let fixture: ComponentFixture<ReservarEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
