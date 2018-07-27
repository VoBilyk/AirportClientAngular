import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotListComponent } from './pilot-list.component';

describe('PilotsComponent', () => {
  let component: PilotListComponent;
  let fixture: ComponentFixture<PilotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
