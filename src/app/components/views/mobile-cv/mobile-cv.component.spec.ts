import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCvComponent } from './mobile-cv.component';

describe('MobileCvComponent', () => {
  let component: MobileCvComponent;
  let fixture: ComponentFixture<MobileCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
