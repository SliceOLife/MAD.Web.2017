import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralCardComponent } from './mural-card.component';

describe('ArtCardComponent', () => {
  let component: MuralCardComponent;
  let fixture: ComponentFixture<MuralCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
