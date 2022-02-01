import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebikeComponent } from './updatebike.component';

describe('UpdatebikeComponent', () => {
  let component: UpdatebikeComponent;
  let fixture: ComponentFixture<UpdatebikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
