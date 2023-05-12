import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEsComponent } from './update_es.component';

describe('UpdateEsComponent', () => {
  let component: UpdateEsComponent;
  let fixture: ComponentFixture<UpdateEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
