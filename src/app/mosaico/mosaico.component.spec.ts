import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicoComponent } from './mosaico.component';

describe('MosaicoComponent', () => {
  let component: MosaicoComponent;
  let fixture: ComponentFixture<MosaicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
