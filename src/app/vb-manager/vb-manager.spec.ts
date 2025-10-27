import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbManagerComponent as VbManager } from './vb-manager';

describe('VbManager', () => {
  let component: VbManager;
  let fixture: ComponentFixture<VbManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VbManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VbManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
