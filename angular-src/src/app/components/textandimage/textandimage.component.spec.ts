import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextandimageComponent } from './textandimage.component';

describe('TextandimageComponent', () => {
  let component: TextandimageComponent;
  let fixture: ComponentFixture<TextandimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextandimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextandimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
