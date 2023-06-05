import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCaregarMaisComponent } from './botao-carregar-mais.component';

describe('BotaoCaregarMaisComponent', () => {
  let component: BotaoCaregarMaisComponent;
  let fixture: ComponentFixture<BotaoCaregarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCaregarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCaregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
