import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbellbuttonComponent } from './showbellbutton.component';

describe('ShowbellbuttonComponent', () => {
  let component: ShowbellbuttonComponent;
  let fixture: ComponentFixture<ShowbellbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowbellbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowbellbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
