import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralDetailComponent } from './mural-detail.component';

describe('MuralDetailComponent', () => {
  let component: MuralDetailComponent;
  let fixture: ComponentFixture<MuralDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
