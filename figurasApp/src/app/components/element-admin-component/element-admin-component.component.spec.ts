import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAdminComponentComponent } from './element-admin-component.component';

describe('ElementAdminComponentComponent', () => {
  let component: ElementAdminComponentComponent;
  let fixture: ComponentFixture<ElementAdminComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAdminComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
