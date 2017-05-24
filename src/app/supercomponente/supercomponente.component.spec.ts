import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercomponenteComponent } from './supercomponente.component';

describe('SupercomponenteComponent', () => {
  let component: SupercomponenteComponent;
  let fixture: ComponentFixture<SupercomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
