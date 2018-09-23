import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRegistryComponent } from './child-registry.component';

describe('ChildRegistryComponent', () => {
  let component: ChildRegistryComponent;
  let fixture: ComponentFixture<ChildRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
