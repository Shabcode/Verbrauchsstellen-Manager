import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbListComponent } from './vb-list';

describe('VbList', () => {
  let component: VbListComponent;
  let fixture: ComponentFixture<VbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VbListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
