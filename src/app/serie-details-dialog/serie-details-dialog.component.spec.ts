import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetailsDialogComponent } from './serie-details-dialog.component';

describe('SerieDetailsDialogComponent', () => {
  let component: SerieDetailsDialogComponent;
  let fixture: ComponentFixture<SerieDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
