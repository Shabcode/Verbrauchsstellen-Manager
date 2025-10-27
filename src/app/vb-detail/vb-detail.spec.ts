import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbDetailComponent } from './vb-detail';

describe('VbDetail', () => {
  let component: VbDetailComponent;
  let fixture: ComponentFixture<VbDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VbDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
