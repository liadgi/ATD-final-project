import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecipeComponent } from './editrecipe.component';

describe('EditrecipeComponent', () => {
  let component: EditrecipeComponent;
  let fixture: ComponentFixture<EditrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
