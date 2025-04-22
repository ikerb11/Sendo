import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTransferirComponent } from './componente-transferir.component';

describe('ComponenteTransferirComponent', () => {
  let component: ComponenteTransferirComponent;
  let fixture: ComponentFixture<ComponenteTransferirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteTransferirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTransferirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
