import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralListComponent } from './mural-list.component';

describe('MuralListComponent', () => {
  let component: MuralListComponent;
  let fixture: ComponentFixture<MuralListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
